export function BindPose(robot, poseSystem) 
{
  const map = {
    // Spine
    "spine_0.straight": robot.torso.joints[0],
    "spine_0.side": robot.torso.joints[1],
    "spine_1.straight": robot.torso.joints[2],
    "spine_1.side": robot.torso.joints[3],
    "spine_2.straight": robot.torso.joints[4],
    "spine_2.side": robot.torso.joints[5],
    "spine_3.straight": robot.torso.joints[6],
    "spine_3.side": robot.torso.joints[7],
    "spine_4.straight": robot.torso.joints[8],
    "spine_4.side": robot.torso.joints[9],
    "spine_5.straight": robot.torso.joints[10],
    "spine_5.side": robot.torso.joints[11],

    // Legs 
    "leftHip.straight": robot.leftLeg.joints[0],
    "leftHip.side": robot.leftLeg.joints[1],
    "leftHip.roll": robot.leftLeg.joints[2],
    "leftKnee.stretch": robot.leftLeg.joints[3],
    "leftAnkle.vertical": robot.leftLeg.joints[4],
    "leftAnkle.horizontal": robot.leftLeg.joints[5],
    "leftAnkle.roll": robot.leftLeg.joints[6],

    "rightHip.straight": robot.rightLeg.joints[0],
    "rightHip.side": robot.rightLeg.joints[1],
    "rightHip.roll": robot.rightLeg.joints[2],
    "rightKnee.stretch": robot.rightLeg.joints[3],
    "rightAnkle.vertical": robot.rightLeg.joints[4],
    "rightAnkle.horizontal": robot.rightLeg.joints[5],
    "rightAnkle.roll": robot.rightLeg.joints[6],
    
    // Arms
    "leftShoulderBase.horizontal": robot.leftArm.joints[0],
    "leftShoulderBase.vertical": robot.leftArm.joints[1],
    "leftShoulder.horizontal": robot.leftArm.joints[2],
    "leftShoulder.vertical": robot.leftArm.joints[3],
    "leftShoulder.roll": robot.leftArm.joints[4],
    "leftElbow.stretch": robot.leftArm.joints[5],
    "leftWrist.roll": robot.leftArm.joints[6],
    "leftWrist.stretch": robot.leftArm.joints[7],
    
    "rightShoulderBase.horizontal": robot.rightArm.joints[0],
    "rightShoulderBase.vertical": robot.rightArm.joints[1],
    "rightShoulder.horizontal": robot.rightArm.joints[2],
    "rightShoulder.vertical": robot.rightArm.joints[3],
    "rightShoulder.roll": robot.rightArm.joints[4],
    "rightElbow.stretch": robot.rightArm.joints[5],
    "rightWrist.roll": robot.rightArm.joints[6],
    "rightWrist.stretch": robot.rightArm.joints[7],
  };

  for (const [key, joint] of Object.entries(map))
  {
    poseSystem.RegisterJoint(key, joint);
  }
}