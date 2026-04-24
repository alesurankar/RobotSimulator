import * as THREE from "three";
import { Link } from "../models/link.js";
import { Joint } from "../models/joint.js";

export class Limb
{
  constructor(
  {
    segments = 3,
    segmentLength = 5,
    parent = null,
    axis = new THREE.Vector3(0, 0, 1),
    position = new THREE.Vector3(0, 0, 0),
    rotation = new THREE.Euler(0, 0, 0),
  } = {}) 
  {
    this.root = new THREE.Group();
    this.root.position.copy(position);
    this.root.rotation.copy(rotation);
    parent?.add(this.root);

    //this.segments = segments;
    //this.segmentLength = segmentLength;

    this.joints = [];
    this.links = [];

    let currentParent = this.root;
    // JOINT
    const joint = new Joint({
      parent: currentParent,
      axis
    });

    this.joints.push(joint);

    // LINK
    const link = new Link({
      length: segmentLength,
      parent: joint.pivot
    });

    this.links.push(link);

    // move joint to end of previous link
    joint.pivot.position.y = 0;

    currentParent = link.objectRoot;
    for (let i = 1; i < segments; i++) 
    {
      // JOINT
      const joint = new Joint({
        parent: currentParent,
        axis
      });

      this.joints.push(joint);

      // LINK
      const link = new Link({
        length: segmentLength,
        parent: joint.pivot
      });

      this.links.push(link);

      // move joint to end of previous link
      joint.pivot.position.y = segmentLength;

      currentParent = link.objectRoot;
    }
  }

  /**
   * Optional animation helper
   */
  Update(dt, fn)
  {
    const t = performance.now() * 0.001;

    for (let i = 0; i < this.joints.length; i++) 
    {
      const angle = fn
        ? fn(i, t)
        : 0;

      this.joints[i].setRotation(angle);
    }
  }

  Dispose()
  {
    this.links.forEach(l => l?.Dispose());
    this.joints.forEach(j => j?.Dispose());

    this.root.removeFromParent();
  }
}