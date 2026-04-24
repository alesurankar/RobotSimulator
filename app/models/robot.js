import * as THREE from "three";
import { Link } from "../models/link.js";
import { Joint } from "../models/joint.js";

export class Robot
{
  constructor({ segments = 3 } = {}) 
  {
    this.root = new THREE.Group();

    this.links = [];
    this.joints = [];

    let parent = this.root;

    for (let i = 0; i < segments; i++) {

      // JOINT
      const joint = new Joint({ parent });
      this.joints.push(joint);

      // LINK
      const link = new Link({ parent: joint.pivot });
      this.links.push(link);

      // move joint to end of link
      joint.pivot.position.y = 5;

      parent = link.objectRoot;
    }
  }

  Update(dt) 
  {
    const t = performance.now() * 0.001;

    for (let i = 0; i < this.joints.length; i++) {
      const phase = i * 0.8;

      const freq = 1 + i * 0.3;
      const amp = 0.5 + i * 0.2;

      const angle = Math.sin(t * freq + phase) * amp;

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