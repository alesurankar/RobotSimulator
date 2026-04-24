import * as THREE from "three";
import { Limb } from "../models/limb.js";

export class Robot
{
  constructor()
  {
    this.root = new THREE.Group();
    
    this.torso = new Limb({
      segments: 2,
      segmentLength: 5,
      parent: this.root
    });

    // ===== LEFT ARM =====
    this.leftArm = new Limb({
      segments: 3,
      segmentLength: 3,
      parent: this.torso.joints[1].pivot,
      rotation: new THREE.Euler(0, 0, -Math.PI/2),
      position: new THREE.Vector3(1, 0, 0) 
    });

    // ===== RIGHT ARM =====
    this.rightArm = new Limb({
      segments: 3,
      segmentLength: 3,
      parent: this.torso.joints[1].pivot,
      rotation: new THREE.Euler(0.5, 0, Math.PI/2),
      position: new THREE.Vector3(-1, 0, 0)
    });

    // ===== LEFT LEG =====
    this.leftLeg = new Limb({
      segments: 3,
      segmentLength: 4,
      parent: this.torso.root,
      axis: new THREE.Vector3(0, 0, -1),
      rotation: new THREE.Euler(0.5, 0, -4*Math.PI/5),
      position: new THREE.Vector3(1, 0, 0) 
    });

    // ===== RIGHT LEG =====
    this.rightLeg = new Limb({
      segments: 3,
      segmentLength: 4,
      parent: this.torso.root,
      axis: new THREE.Vector3(0, 0, -1),
      rotation: new THREE.Euler(0, 0, 4*Math.PI/5),
      position: new THREE.Vector3(-1, 0, 0)
    });
  }

  Update(dt)
  {
    const t = performance.now() * 0.001;

    // arms swing opposite
    this.leftArm.Update(dt, (i, t) =>
      Math.sin(t * 2 + i * 0.5) * 0.6
    );

    this.rightArm.Update(dt, (i, t) =>
      Math.sin(t * 2 + Math.PI + i * 0.5) * 0.6
    );

    // legs opposite to arms
    this.leftLeg.Update(dt, (i, t) =>
      Math.sin(t * 2 + Math.PI + i * 0.6) * 0.3
    );

    this.rightLeg.Update(dt, (i, t) =>
      Math.sin(t * 2 + i * 0.6) * 0.3
    );

    // torso subtle sway
    this.torso.Update(dt, (i, t) =>
      Math.sin(t) * 0.1
    );
  }

  Dispose()
  {
    this.torso.Dispose();
    this.leftArm.Dispose();
    this.rightArm.Dispose();
    this.leftLeg.Dispose();
    this.rightLeg.Dispose();

    this.root.removeFromParent();
  }
}