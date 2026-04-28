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
    for (const key in this.joints) {

      const joint = this.joints[key];
      const value = blackboard.Get(key, 50);

      if (value === undefined) continue;

      joint.SetRotation(this.MapToJoint(joint, value));
    }
  }
}