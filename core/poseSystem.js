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
      const t = lk / 100;
      this.joints.leftKnee.SetRotation(-t * maxBend);
    }

    if (this.joints.rightKnee) {
      const t = rk / 100;
      this.joints.rightKnee.SetRotation(-t * maxBend);
    }

    // ---- SHOULDERS ----
    const shoulder = [
      ["leftShoulder.pitch", "leftShoulder.pitch"],
      ["leftShoulder.yaw", "leftShoulder.yaw"],
      ["leftShoulder.roll", "leftShoulder.roll"],

      ["rightShoulder.pitch", "rightShoulder.pitch"],
      ["rightShoulder.yaw", "rightShoulder.yaw"],
      ["rightShoulder.roll", "rightShoulder.roll"],
    ];

    for (const [key, jointName] of shoulder) {
      const value = blackboard.Get(key, 50);

      const joint = this.joints[jointName];
      if (!joint) continue;

      joint.SetRotation(this.MapToJoint(joint, value));
    }
  }
}