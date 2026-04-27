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
    // ---- KNEES (1 DOF) ----
    const lk = blackboard.Get("leftKnee.stretch", 0);
    const rk = blackboard.Get("rightKnee.stretch", 0);

    const maxBend = Math.PI * 0.8;

    if (this.joints.leftKnee) {
      this.joints.leftKnee.SetRotation(-lk / 100 * maxBend);
    }

    if (this.joints.rightKnee) {
      this.joints.rightKnee.SetRotation(-rk / 100 * maxBend);
    }

    // ---- SHOULDERS (3 DOF) ----
    const left = blackboard.GetJoint("leftShoulder", {
      pitch: 50,
      yaw: 50,
      roll: 50
    });
    const right = blackboard.GetJoint("rightShoulder", {
      pitch: 50,
      yaw: 50,
      roll: 50
    });

    if (this.joints.leftShoulder) {
      const j = this.joints.leftShoulder;
      j.SetRotation(
        this.MapToJoint(j, left.pitch),
        this.MapToJoint(j, left.yaw),
        this.MapToJoint(j, left.roll)
      );
    }

    if (this.joints.rightShoulder) {
      const j = this.joints.rightShoulder;
      j.SetRotation(
        this.MapToJoint(j, right.pitch),
        this.MapToJoint(j, right.yaw),
        this.MapToJoint(j, right.roll)
      );
    }
  }
}