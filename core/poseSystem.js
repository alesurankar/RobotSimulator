import * as THREE from "three";


export class PoseSystem 
{
  constructor(robot) 
  {
    this.robot = robot;
    this.joints = {};
    //console.log("PoseSystem created", this);
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
    //console.log("JOINT COUNT:", Object.keys(this.joints).length);
    for (const key in this.joints) {

      const joint = this.joints[key];
      const value = blackboard.Get(key, 50);

      const angle = this.MapToJoint(joint, value);
      //console.log(key, value, angle);
      joint.SetRotation(angle);
    }
  }
}