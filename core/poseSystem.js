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

  MapToJoint(joint, value)
  {
    const t = THREE.MathUtils.clamp((value - 50) / 50, -1, 1);

    return THREE.MathUtils.lerp(
      joint.minAngle,
      joint.maxAngle,
      (t + 1) / 2
    );
  }

  Update(dt, blackboard) 
  {
    // ---- KNEES ----
    const lk = blackboard.Get("leftKnee.stretch", 0);
    const rk = blackboard.Get("rightKnee.stretch", 0);

    const maxBend = Math.PI * 0.8;

    if (this.joints.leftKnee) {
      this.joints.leftKnee.SetRotation(-lk / 100 * maxBend);
    }

    if (this.joints.rightKnee) {
      this.joints.rightKnee.SetRotation(-rk / 100 * maxBend);
    }

    // ---- SHOULDERS ----
    const shoulder = [
      ["leftShoulder.pitch", "leftShoulder.pitch"],
      ["leftShoulder.yaw", "leftShoulder.yaw"],

      ["rightShoulder.pitch", "rightShoulder.pitch"],
      ["rightShoulder.yaw", "rightShoulder.yaw"],
    ];

    for (const [key, jointName] of shoulder) {
      const value = blackboard.Get(key, 50);

      const joint = this.joints[jointName];
      if (!joint) continue;

      joint.SetRotation(this.MapToJoint(joint, value));
    }
  }
}