import * as THREE from "three";
import { Link } from "../models/link.js";
import { Joint } from "../models/joint.js";

export class Limb
{
  constructor(
  {
    structure = [{ length: 5 }, { length: 5 }],
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

    this.joints = [];
    this.links = [];

    let currentParent = this.root;

    for (let i = 0; i < structure.length; i++) {
      const segment = structure[i];

      // MULTI-AXIS JOINT (NEW)
      if (segment.isJoint && segment.dof > 1) {

        const jointGroup = {
          axes: [],
          SetRotation: (x, y, z) => {
            if (jointGroup.axes[0]) jointGroup.axes[0].SetRotation(x);
            if (jointGroup.axes[1]) jointGroup.axes[1].SetRotation(y);
            if (jointGroup.axes[2]) jointGroup.axes[2].SetRotation(z);
          }
        };

        for (let i = 0; i < segment.dof; i++) {
          const joint = new Joint({
            parent: currentParent,
            axis: segment.axes?.[i] ?? new THREE.Vector3(
              i === 0 ? 1 : 0,
              i === 1 ? 1 : 0,
              i === 2 ? 1 : 0
            ),
            restRotation: segment.restRotation ?? new THREE.Euler(),
            minAngle: segment.min ?? -Math.PI,
            maxAngle: segment.max ?? Math.PI
          });

          jointGroup.axes.push(joint);
          this.joints.push(joint);
        }

        currentParent = jointGroup.axes[0].pivot;
        this.joints.push(jointGroup);
        continue;
      }

      // NORMAL JOINT (1 DOF)
      const joint = new Joint({
        parent: currentParent,
        axis: segment.axis ?? axis,
        restRotation: segment.restRotation ?? new THREE.Euler(),
        minAngle: segment.min ?? -Math.PI,
        maxAngle: segment.max ?? Math.PI
      });
      this.joints.push(joint);

      // LINK
      const link = new Link({
        length: segment.length,
        thickness: segment.thickness ?? 0.5,
        color: segment.color ?? 0xC9B903,
        shape: segment.shape,
        parent: joint.pivot
      });
      this.links.push(link);

      joint.pivot.position.y = (i === 0) ? 0 : structure[i - 1].length;
      currentParent = link.objectRoot;
    }
  }

  Update(dt, fn)
  {
    const t = performance.now() * 0.001;

    for (let i = 0; i < this.joints.length; i++) {
      const joint = this.joints[i];

      const value = fn ? fn(i, t) : 0;
      joint.SetRotation(value);
    }
  }

  Dispose()
  {
    this.links.forEach(l => l?.Dispose());
    this.joints.forEach(j => j?.Dispose());
    this.root.removeFromParent();
  }
}