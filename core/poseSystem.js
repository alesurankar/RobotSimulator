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
    return t;
  }

  Update(dt, blackboard) 
  {
    for (const key in this.joints) {
      const joint = this.joints[key];
      const value = blackboard.Get(key, 50);
      const t = (value - 50) / 50;
      const offset = t * 1.0;

      joint.SetOffset(offset);
    }
  }
}