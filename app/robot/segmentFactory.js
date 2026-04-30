import * as THREE from "three";
import { Limb } from "./models/limb.js";

export function CreateTorso() 
{
  return new Limb({
    structure: [
      { name: "spine_0.straight", length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { name: "spine_0.side", length: 2.0, width: 1.6, depth: 1.6, shape: "sphere", jointRadius: 0.6},
      { name: "spine_1.straight", length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { name: "spine_1.side", length: 1.6, width: 1, depth: 1, shape: "cylinder", jointRadius: 0.8},
      { name: "spine_2.straight", length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { name: "spine_2.side", length: 1.6, width: 1.8, depth: 1.4, shape: "cylinder", jointRadius: 0.8},
      { name: "spine_3.straight", length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { name: "spine_3.side", length: 1.6, width: 2.2, depth: 2.0, shape: "cylinder", jointRadius: 1.0},
      { name: "spine_4.straight", length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { name: "spine_4.side", length: 1, width: 0.6, depth: 0.6 },
      { name: "spine_5.straight", length: 0, axis: new THREE.Vector3(1, 0, 0)},
      { name: "spine_5.side", length: 2.6, width: 3.9, depth: 3.9, shape: "sphere", jointRadius: 0.8 },
    ],
  });
}

export function CreateLeftArm() 
{
  return new Limb({
    structure: [
      // Shoulder Base DOF 2
      { 
        name: "leftShoulderBase.horizontal",
        length: 0.3,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, -Math.PI/2),
      },
      {
        name: "leftShoulderBase.vertical",
        length: 1.7,
        width: 1,
        depth: 2,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 0, 1),
        jointRadius: 1.2
      },
      // Shoulder DOF 3
      {
        name: "leftShoulder.horizontal",
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, -Math.PI/3),
      },
      {
        name: "leftShoulder.vertical",
        length: 0,
        axis: new THREE.Vector3(0, 0, 1),
      },
      {
        name: "leftShoulder.roll",
        length: 3.8,
        width: 0.6,
        depth: 0.8,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.7
      },
      // Arm DOF 1
      {
        name: "leftElbow.stretch",
        length: 3.6,
        width: 0.4,
        depth: 0.6,
        shape: "cylinder",
        axis: new THREE.Vector3(1, 0, 0),
        jointRadius: 0.5
      },
      // Hand DOF 2
      {
        name: "leftWrist.roll",
        length: 0,
        axis: new THREE.Vector3(0, 1, 0),
      },
      {
        name: "leftWrist.stretch",
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
        name: "rightShoulderBase.horizontal",
        length: 0.3,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, Math.PI/2),
      },
      {
        name: "rightShoulderBase.vertical",
        length: 1.7,
        width: 1,
        depth: 2,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 0, 1),
        jointRadius: 1.2
      },
      // Shoulder DOF 3
      {
        name: "rightShoulder.horizontal",
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(0, 0, Math.PI/3),
      },
      {
        name: "rightShoulder.vertical",
        length: 0,
        axis: new THREE.Vector3(0, 0, 1),
      },
      {
        name: "rightShoulder.roll",
        length: 3.8,
        width: 0.6,
        depth: 0.8,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.7
      },
      // Arm DOF 1
      {
        name: "rightElbow.stretch",
        length: 3.6,
        width: 0.4,
        depth: 0.6,
        shape: "cylinder",
        axis: new THREE.Vector3(1, 0, 0),
        jointRadius: 0.5
      },
      // Hand DOF 2
      {
        name: "rightWrist.roll",
        length: 0,
        axis: new THREE.Vector3(0, 1, 0),
      },
      {
        name: "rightWrist.stretch",
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
        name: "leftHip.straight",
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
      },
      {
        name: "leftHip.side",
        length: 0,
        axis: new THREE.Vector3(0, 0, -1),
      },
      {
        name: "leftHip.roll",
        length: 5.2,
        width: 0.8,
        depth: 0.9,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.7
      },
      // Knee DOF 1
      {
        name: "leftKnee.stretch",
        length: 4.7,
        width: 0.6,
        depth: 0.8,
        shape: "cylinder",
        axis: new THREE.Vector3(1, 0, 0),
        jointRadius: 0.6
      },
      // Ankle DOF 3
      {
        name: "leftAnkle.vertical",
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(1.55, 0, 0)
      },
      {
        name: "leftAnkle.horizontal",
        length: 0,
        axis: new THREE.Vector3(0, 0, -1),
      },
      {
        name: "leftAnkle.roll",
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
        name: "rightHip.straight",
        length: 0,
        axis: new THREE.Vector3(1, 0, 0)
      },
      {
        name: "rightHip.side",
        length: 0,
        axis: new THREE.Vector3(0, 0, 1),
      },
      {
        name: "rightHip.roll",
        length: 5.2,
        width: 0.8,
        depth: 0.9,
        shape: "cylinder",
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.7
      },
      // Knee DOF 1
      {
        name: "rightKnee.stretch",
        length: 4.7,
        width: 0.6,
        depth: 0.8,
        shape: "cylinder",
        axis: new THREE.Vector3(1, 0, 0),
        jointRadius: 0.6
      },
      // Ankle 3 DOF
      {
        name: "rightAnkle.vertical",
        length: 0,
        axis: new THREE.Vector3(1, 0, 0),
        restRotation: new THREE.Euler(1.55, 0, 0)
      },
      {
        name: "rightAnkle.horizontal",
        length: 0,
        axis: new THREE.Vector3(0, 0, 1)
      },
      {
        name: "rightAnkle.roll",
        length: 2,
        width: 0.8,
        depth: 0.4,
        axis: new THREE.Vector3(0, 1, 0),
        jointRadius: 0.35
      }
    ],
  });
}
