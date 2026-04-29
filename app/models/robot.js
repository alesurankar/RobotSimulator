import * as THREE from "three";
import { Limb } from "../models/limb.js";

export class Robot
{
  constructor()
  {
    this.root = new THREE.Group();
    this.model = new THREE.Group();
    this.root.add(this.model);
    
    this.torso = new Limb({
      structure: [
        { length: 0, axis: new THREE.Vector3(1, 0, 0)},
        { length: 2.0, width: 1.6, depth: 1.6, shape: "sphere", jointRadius: 0.6},
        { length: 0, axis: new THREE.Vector3(1, 0, 0)},
        { length: 1.6, width: 0.8, depth: 0.8, shape: "cylinder", jointRadius: 0.5},
        { length: 0, axis: new THREE.Vector3(1, 0, 0)},
        { length: 1.6, width: 1.2, depth: 0.8, shape: "cylinder", jointRadius: 0.5},
        { length: 0, axis: new THREE.Vector3(1, 0, 0)},
        { length: 1.6, width: 2.4, depth: 2.4, shape: "sphere", jointRadius: 0.7},
        { length: 0, axis: new THREE.Vector3(1, 0, 0)},
        { length: 1, width: 0.6, depth: 0.6 },
        { length: 0, axis: new THREE.Vector3(1, 0, 0)},
        { length: 2.7, width: 4.0, depth: 4.0, shape: "sphere", jointRadius: 0.8 },
      ],
      parent: this.model
    });

    // ===== LEFT ARM =====
    this.leftArm = new Limb({
      structure: [
        // Shoulder DOF 3
        {
          length: 0,
          axis: new THREE.Vector3(1, 0, 0),
        },
        {
          length: 0,
          axis: new THREE.Vector3(0, 0, 1),
        },
        {
          length: 3.8,
          width: 0.6,
          depth: 0.6,
          shape: "cylinder",
          axis: new THREE.Vector3(0, 1, 0),
          jointRadius: 0.6
        },
        // Arm DOF 1
        {
          length: 3.6,
          width: 0.4,
          depth: 0.6,
          shape: "cylinder",
          axis: new THREE.Vector3(1, 0, 0),
          jointRadius: 0.5
        },
        // Hand DOF 2
        {
          length: 0,
          axis: new THREE.Vector3(0, 1, 0),
        },
        {
          length: 1.2,
          width: 1.2,
          depth: 0.35,
          axis: new THREE.Vector3(1, 0, 0),
          jointRadius: 0.35
        }
      ],
      parent: this.torso.joints[9].pivot,
      rotation: new THREE.Euler(0, 0, -2.6),
      position: new THREE.Vector3(1, 0, 0) 
    });

    // ===== RIGHT ARM =====
    this.rightArm = new Limb({
      structure: [
        // Shoulder DOF 3
        {
          length: 0,
          axis: new THREE.Vector3(1, 0, 0),
        },
        {
          length: 0,
          axis: new THREE.Vector3(0, 0, 1),
        },
        {
          length: 3.8,
          width: 0.6,
          depth: 0.6,
          shape: "cylinder",
          axis: new THREE.Vector3(0, 1, 0),
          jointRadius: 0.6
        },
        // Arm DOF 1
        {
          length: 3.6,
          width: 0.4,
          depth: 0.6,
          shape: "cylinder",
          axis: new THREE.Vector3(1, 0, 0),
          jointRadius: 0.5
        },
        // Hand DOF 2
        {
          length: 0,
          axis: new THREE.Vector3(0, 1, 0),
        },
        {
          length: 1.2,
          width: 1.2,
          depth: 0.35,
          axis: new THREE.Vector3(1, 0, 0),
          jointRadius: 0.35
        }
      ],
      parent: this.torso.joints[9].pivot,
      rotation: new THREE.Euler(0, 0, 2.6),
      position: new THREE.Vector3(-1, 0, 0)
    });

    // ===== LEFT LEG =====
    this.leftLeg = new Limb({
      // Hip DOF 3
      structure: [
        {
          length: 0,
          axis: new THREE.Vector3(1, 0, 0),
        },
        {
          length: 0,
          axis: new THREE.Vector3(0, 0, -1),
        },
        {
          length: 5.2,
          width: 0.8,
          depth: 0.9,
          shape: "cylinder",
          axis: new THREE.Vector3(0, 1, 0),
          jointRadius: 0.7
        },
        // Knee DOF 1
        {
          length: 4.7,
          width: 0.6,
          depth: 0.8,
          shape: "cylinder",
          axis: new THREE.Vector3(1, 0, 0),
          jointRadius: 0.6
        },
        // Ankle DOF 3
        {
          length: 0,
          axis: new THREE.Vector3(1, 0, 0),
          restRotation: new THREE.Euler(1.55, 0, 0)
        },
        {
          length: 0,
          axis: new THREE.Vector3(0, 0, -1),
        },
        {
          length: 2,
          width: 0.8,
          depth: 0.4,
          axis: new THREE.Vector3(0, 1, 0),
          jointRadius: 0.35
        }
      ],
      parent: this.torso.root,
      rotation: new THREE.Euler(0, 0, -3.1),
      position: new THREE.Vector3(1.2, 0, 0) 
    });

    // ===== RIGHT LEG =====
    this.rightLeg = new Limb({
      structure: [
        // Hip DOF 3
        {
          length: 0,
          axis: new THREE.Vector3(1, 0, 0)
        },
        {
          length: 0,
          axis: new THREE.Vector3(0, 0, 1),
        },
        {
          length: 5.2,
          width: 0.8,
          depth: 0.9,
          shape: "cylinder",
          axis: new THREE.Vector3(0, 1, 0),
          jointRadius: 0.7
        },
        // Knee DOF 1
        {
          length: 4.7,
          width: 0.6,
          depth: 0.8,
          shape: "cylinder",
          axis: new THREE.Vector3(1, 0, 0),
          jointRadius: 0.6
        },
        // Ankle 3 DOF
        {
          length: 0,
          axis: new THREE.Vector3(1, 0, 0),
          restRotation: new THREE.Euler(1.55, 0, 0)
        },
        {
          length: 0,
          axis: new THREE.Vector3(0, 0, 1)
        },
        {
          length: 2,
          width: 0.8,
          depth: 0.4,
          axis: new THREE.Vector3(0, 1, 0),
          jointRadius: 0.35
        }
      ],
      parent: this.torso.root,
      rotation: new THREE.Euler(0, 0, 3.1),
      position: new THREE.Vector3(-1.2, 0, 0)
    });
    
    this.model.position.y = 10;

    this.limbs = {
      leftLeg: this.leftLeg,
      rightLeg: this.rightLeg,
      leftArm: this.leftArm,
      rightArm: this.rightArm
    };
  }

  SetPosition(x, y, z)
  {
    this.root.position.set(x, y, z);
  }

  SetRotation(x, y, z)
  {
    this.root.rotation.set(x, y, z);
  }

  MoveWorld(dx, dy, dz)
  {
    this.root.position.add(new THREE.Vector3(dx, dy, dz));
  }

  MoveLocal(dx, dy, dz)
  {
    const v = new THREE.Vector3(dx, dy, dz);
    v.applyQuaternion(this.root.quaternion);
    this.root.position.add(v);
  }

  RotateX(angle)
  {
    this.root.rotateX(angle);
  }

  RotateY(angle)
  {
    this.root.rotateY(angle);
  }

  RotateZ(angle)
  {
    this.root.rotateZ(angle);
  }

  Update(dt, blackboard)
  {
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