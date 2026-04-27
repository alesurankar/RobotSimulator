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
    const limbs = [
      // legs 
      ["leftKnee.stretch", "leftKnee.stretch"],
      ["rightKnee.stretch", "rightKnee.stretch"],
      // Arms
      ["leftShoulder.pitch", "leftShoulder.pitch"],
      ["leftShoulder.yaw", "leftShoulder.yaw"],
      ["leftElbow.stretch", "leftElbow.stretch"],
      ["rightShoulder.pitch", "rightShoulder.pitch"],
      ["rightShoulder.yaw", "rightShoulder.yaw"],
      ["rightElbow.stretch", "rightElbow.stretch"],
    ];

    for (const [key, jointName] of limbs) {
      const value = blackboard.Get(key, 50);
      const joint = this.joints[jointName];
      if (!joint) continue;
      joint.SetRotation(this.MapToJoint(joint, value));
    }
  }
}