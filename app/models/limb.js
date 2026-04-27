import * as THREE from "three";
import { Link } from "../models/link.js";
import { Joint } from "../models/joint.js";

export class Limb
{
  constructor(
  {
    structure = [],
    parent = null,
    axis = new THREE.Vector3(0, 0, 1),
    position = new THREE.Vector3(),
    rotation = new THREE.Euler(),
  } = {}) 
  {
    this.root = new THREE.Group();
    this.root.position.copy(position);
    this.root.rotation.copy(rotation);
    parent?.add(this.root);

    this.joints = {};
    this.links = [];

    let currentParent = this.root;

    for (let i = 0; i < structure.length; i++) {
      const s = structure[i];

      // MULTI-AXIS JOINT (NEW)
      if (s.isJoint) {

        const axes = s.axes ?? [
          new THREE.Vector3(1, 0, 0),
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(0, 0, 1)
        ];

        const joints = [];

        for (let a = 0; a < (s.dof ?? 3); a++) {

          const j = new Joint({
            parent: currentParent,
            axis: axes[a],
            restRotation: s.restRotation ?? new THREE.Euler(),
            minAngle: s.min ?? -Math.PI,
            maxAngle: s.max ?? Math.PI
          });

          joints.push(j);
        }

        const jointAPI = {
          joints,

          SetRotation: (x = 0, y = 0, z = 0) => {
            if (joints[0]) joints[0].SetRotation(x);
            if (joints[1]) joints[1].SetRotation(y);
            if (joints[2]) joints[2].SetRotation(z);
          }
        };

        this.joints[s.name] = jointAPI;

        currentParent = joints[0].pivot;
        continue;
      }

      // NORMAL JOINT (1 DOF)
      const joint = new Joint({
        parent: currentParent,
        axis: s.axis ?? axis,
        restRotation: s.restRotation ?? new THREE.Euler(),
        minAngle: s.min ?? -Math.PI,
        maxAngle: s.max ?? Math.PI
      });

      this.joints[s.name] = joint;

      // LINK
      const link = new Link({
        length: s.length,
        thickness: s.thickness ?? 0.5,
        color: s.color ?? 0xC9B903,
        shape: s.shape,
        parent: joint.pivot
      });
      this.links.push(link);

      joint.pivot.position.y = (i === 0) ? 0 : structure[i - 1].length;
      currentParent = link.objectRoot;
    }
  }

  Update(dt, fn) {}

  Dispose()
  {
    this.links.forEach(l => l?.Dispose());
    this.root.removeFromParent();
  }
}