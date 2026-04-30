import * as THREE from "three";
import { BaseScene } from "./baseScene.js"
import { Robot } from "../robot/robot.js";
import { Locomotion } from "../../core/locomotion.js";
import { PoseSystem } from "../../core/poseSystem.js";
import { SimpleLegIK } from "../ik_solver/simpleLegIK.js";


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
    this.robot = null;
    this.ik = new SimpleLegIK(4, 4);
    this.ikTarget = new THREE.Vector2(10, 1);
  }

  CreateObjects()
  { 
    this.robot = new Robot();
    this.scene.add(this.robot.root);
    this.objects.push(this.robot);

    this.locomotion = new Locomotion(this.robot);
    this.poseSystem = new PoseSystem(this.robot);

    

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
    this.robot.animator.Update(dt, blackboard);
    this.ik.Update(dt, blackboard, this.ikTarget);
    this.locomotion.Update(dt, blackboard);
    this.poseSystem.Update(dt, blackboard);
  }
}