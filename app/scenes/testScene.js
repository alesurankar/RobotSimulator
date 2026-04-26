import * as THREE from "three";
import { BaseScene } from "./baseScene.js"
import { Robot } from "../models/robot.js";
import { Locomotion } from "../../core/locomotion.js";


export class TestScene extends BaseScene
{
  constructor(scene, camera, player) 
  {  
    super(scene, camera, player);
    this.cameraSettings = {
      pos: { x: -10, y: 10, z: 10 },
      lookAt: { x: 0, y: 0, z: 0 },
      fov: 40
    };
    this.locomotion = null;
    this.robot = null;
  }

  CreateObjects()
  { 
    this.robot = new Robot();
    this.scene.add(this.robot.root);
    this.objects.push(this.robot);

    this.locomotion = new Locomotion(this.robot);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );

    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;

    ground.receiveShadow = true;

    this.scene.add(ground);
  }

  Update(dt, blackboard) 
  {
    super.Update(dt, blackboard);
    this.locomotion.Update(dt, blackboard);
  }
}