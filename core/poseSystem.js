import * as THREE from "three";

export class PoseSystem 
{
  constructor(robot) 
  {
    this.robot = robot;
    this.joints = {};
  }

  RegisterJoint(name, joint)
  {
    this.joints[name] = joint;
  }

  Update(dt, blackboard) 
  {
    // ---- LEFT KNEE ----
    const kneeStretch = blackboard.Get("leftKnee.stretch", 0);

    if (this.joints.leftKnee) 
    {
      // map 0–10 slider → normalized 0–1
      const t = THREE.MathUtils.clamp(kneeStretch / 10, 0, 1);

      // convert to angle (example: 0 → straight, 1 → bent)
      const maxBend = Math.PI * 0.8;

      this.joints.leftKnee.SetRotation(-t * maxBend);
    }

    // ---- RIGHT KNEE ----
    const rightStretch = blackboard.Get("rightKnee.stretch", 0);

    if (this.joints.rightKnee) 
    {
      const t = THREE.MathUtils.clamp(rightStretch / 10, 0, 1);
      const maxBend = Math.PI * 0.8;

      this.joints.rightKnee.SetRotation(-t * maxBend);
    }

    // ---- SHOULDERS ----
    const leftShoulder = blackboard.Get("leftShoulder.rotate", 0);

    if (this.joints.leftShoulder) 
    {
      const t = THREE.MathUtils.clamp(leftShoulder / 10, -1, 1);
      this.joints.leftShoulder.SetRotation(t);
    }

    const rightShoulder = blackboard.Get("rightShoulder.rotate", 0);

    if (this.joints.rightShoulder) 
    {
      const t = THREE.MathUtils.clamp(rightShoulder / 10, -1, 1);
      this.joints.rightShoulder.SetRotation(t);
    }
  }
}