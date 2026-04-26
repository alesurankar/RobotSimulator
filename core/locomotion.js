export class Locomotion 
{
  constructor(robot, joints) 
  {
    this.robot = robot;
    this.joints = joints;
  }

  Update(dt) 
  {
    const moveSpeed = this.joints.Get("locomotion.moveSpeed", 0);
    const turnSpeed = this.joints.Get("locomotion.turnSpeed", 0);

    this.robot.RotateY(turnSpeed * dt);
    this.robot.MoveLocal(0, 0, moveSpeed * dt);
  }
}