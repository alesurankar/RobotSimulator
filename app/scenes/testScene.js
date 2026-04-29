import * as THREE from "three";
import { BaseScene } from "./baseScene.js"
import { Robot } from "../models/robot.js";
import { Locomotion } from "../../core/locomotion.js";
import { PoseSystem } from "../../core/poseSystem.js";
import { Animator } from "../moves/animate.js";


export class TestScene extends BaseScene
{
  constructor(scene) 
  {  
    super(scene);
    this.cameraSettings = {
      pos: { x: -50, y: 20, z: 50 },
      lookAt: { x: 0, y: 10, z: 0 },
      fov: 40
    };
    this.locomotion = null;
    this.poseSystem = null;
    this.animator = null;
    this.robot = null;
  }

  CreateObjects()
  { 
    this.robot = new Robot();
    this.scene.add(this.robot.root);
    this.objects.push(this.robot);

    this.locomotion = new Locomotion(this.robot);
    this.poseSystem = new PoseSystem(this.robot);
    this.animator = new Animator();

    // Spine
    this.poseSystem.RegisterJoint("spine_0.straight", this.robot.torso.joints[0]);
    this.poseSystem.RegisterJoint("spine_0.side", this.robot.torso.joints[1]);
    this.poseSystem.RegisterJoint("spine_1.straight", this.robot.torso.joints[2]);
    this.poseSystem.RegisterJoint("spine_1.side", this.robot.torso.joints[3]);
    this.poseSystem.RegisterJoint("spine_2.straight", this.robot.torso.joints[4]);
    this.poseSystem.RegisterJoint("spine_2.side", this.robot.torso.joints[5]);
    this.poseSystem.RegisterJoint("spine_3.straight", this.robot.torso.joints[6]);
    this.poseSystem.RegisterJoint("spine_3.side", this.robot.torso.joints[7]);
    this.poseSystem.RegisterJoint("spine_4.straight", this.robot.torso.joints[8]);
    this.poseSystem.RegisterJoint("spine_4.side", this.robot.torso.joints[9]);
    this.poseSystem.RegisterJoint("spine_5.straight", this.robot.torso.joints[10]);
    this.poseSystem.RegisterJoint("spine_5.side", this.robot.torso.joints[11]);

    // Legs 
    this.poseSystem.RegisterJoint("leftHip.straight", this.robot.leftLeg.joints[0]);
    this.poseSystem.RegisterJoint("leftHip.side", this.robot.leftLeg.joints[1]);
    this.poseSystem.RegisterJoint("leftHip.roll", this.robot.leftLeg.joints[2]);
    this.poseSystem.RegisterJoint("leftKnee.stretch", this.robot.leftLeg.joints[3]);
    this.poseSystem.RegisterJoint("leftAnkle.vertical", this.robot.leftLeg.joints[4]);
    this.poseSystem.RegisterJoint("leftAnkle.horizontal", this.robot.leftLeg.joints[5]);
    this.poseSystem.RegisterJoint("leftAnkle.roll", this.robot.leftLeg.joints[6]);

    this.poseSystem.RegisterJoint("rightHip.straight", this.robot.rightLeg.joints[0]);
    this.poseSystem.RegisterJoint("rightHip.side", this.robot.rightLeg.joints[1]);
    this.poseSystem.RegisterJoint("rightHip.roll", this.robot.rightLeg.joints[2]);
    this.poseSystem.RegisterJoint("rightKnee.stretch", this.robot.rightLeg.joints[3]);
    this.poseSystem.RegisterJoint("rightAnkle.vertical", this.robot.rightLeg.joints[4]);
    this.poseSystem.RegisterJoint("rightAnkle.horizontal", this.robot.rightLeg.joints[5]);
    this.poseSystem.RegisterJoint("rightAnkle.roll", this.robot.rightLeg.joints[6]);
    
    // Arms
    this.poseSystem.RegisterJoint("leftShoulderBase.horizontal", this.robot.leftArm.joints[0]);
    this.poseSystem.RegisterJoint("leftShoulderBase.vertical", this.robot.leftArm.joints[1]);
    this.poseSystem.RegisterJoint("leftShoulder.horizontal", this.robot.leftArm.joints[2]);
    this.poseSystem.RegisterJoint("leftShoulder.vertical", this.robot.leftArm.joints[3]);
    this.poseSystem.RegisterJoint("leftShoulder.roll", this.robot.leftArm.joints[4]);
    this.poseSystem.RegisterJoint("leftElbow.stretch", this.robot.leftArm.joints[5]);
    this.poseSystem.RegisterJoint("leftWrist.roll", this.robot.leftArm.joints[6]);
    this.poseSystem.RegisterJoint("leftWrist.stretch", this.robot.leftArm.joints[7]);

    
    this.poseSystem.RegisterJoint("rightShoulderBase.horizontal", this.robot.rightArm.joints[0]);
    this.poseSystem.RegisterJoint("rightShoulderBase.vertical", this.robot.rightArm.joints[1]);
    this.poseSystem.RegisterJoint("rightShoulder.horizontal", this.robot.rightArm.joints[2]);
    this.poseSystem.RegisterJoint("rightShoulder.vertical", this.robot.rightArm.joints[3]);
    this.poseSystem.RegisterJoint("rightShoulder.roll", this.robot.rightArm.joints[4]);
    this.poseSystem.RegisterJoint("rightElbow.stretch", this.robot.rightArm.joints[5]);
    this.poseSystem.RegisterJoint("rightWrist.roll", this.robot.rightArm.joints[6]);
    this.poseSystem.RegisterJoint("rightWrist.stretch", this.robot.rightArm.joints[7]);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );

    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -4.01;
    ground.receiveShadow = true;

    this.scene.add(ground);
  }

  Update(dt, blackboard) 
  {
    super.Update(dt, blackboard);
    this.animator.Update(dt, blackboard);
    this.locomotion.Update(dt, blackboard);
    this.poseSystem.Update(dt, blackboard);
  }
}