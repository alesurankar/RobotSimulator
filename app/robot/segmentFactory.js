import * as THREE from "three";
import { Limb } from "./models/limb.js";

export function CreateTorso() 
{
  return new Limb({
    structure: [
      { length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { length: 2.0, width: 1.6, depth: 1.6, shape: "sphere", jointRadius: 0.6},
      { length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { length: 1.6, width: 1, depth: 1, shape: "cylinder", jointRadius: 0.8},
      { length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { length: 1.6, width: 1.8, depth: 1.4, shape: "cylinder", jointRadius: 0.8},
      { length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { length: 1.6, width: 2.2, depth: 2.0, shape: "cylinder", jointRadius: 1.0},
      { length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { length: 1, width: 0.6, depth: 0.6 },
      { length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { length: 2.6, width: 3.9, depth: 3.9, shape: "sphere", jointRadius: 0.8 },
    ],
  });
}

export function CreateLeftArm() 
{
  return new Limb({
    structure: [
      // Shoulder Base DOF 2
      {
        length: 0.3,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, -Math.PI/2),
      },
      {
        length: 1.7,
        width: 1,
        depth: 2,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 0, 1),
        jointRadius: 1.2
      },
      // Shoulder DOF 3
      {
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, -Math.PI/3),
      },
      {
        length: 0,
        axis: new THREE.Vector3(0, 0, 1),
      },
      {
        length: 3.8,
        width: 0.6,
        depth: 0.8,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.7
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
        width: 1.0,
        depth: 0.35,
        axis: new THREE.Vector3(1, 0, 0),
        jointRadius: 0.35
      }
    ],
  });
}

export function CreateRightArm() 
{
  return new Limb({
    structure: [
      // Shoulder Base DOF 2
      {
        length: 0.3,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, Math.PI/2),
      },
      {
        length: 1.7,
        width: 1,
        depth: 2,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 0, 1),
        jointRadius: 1.2
      },
      // Shoulder DOF 3
      {
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, Math.PI/3),
      },
      {
        length: 0,
        axis: new THREE.Vector3(0, 0, 1),
      },
      {
        length: 3.8,
        width: 0.6,
        depth: 0.8,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.7
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
        width: 1.0,
        depth: 0.35,
        axis: new THREE.Vector3(1, 0, 0),
        jointRadius: 0.35
      }
    ],
  });
}

export function CreateLeftLeg() 
{
  return new Limb({
    structure: [
      // Hip DOF 3
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
  });
}

export function CreateRightLeg() 
{
  return new Limb({
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
  });
}
