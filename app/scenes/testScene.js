import * as THREE from "three";
import { BaseScene } from "./baseScene.js"
import { Robot } from "../models/robot.js";


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
  }

  CreateObjects()
  { 
    this.robot = new Robot();
    this.scene.add(this.robot.root);
    this.objects.push(this.robot);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );

    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;

    ground.receiveShadow = true;

    this.scene.add(ground);
  }

  Update(dt, joints) 
  {
    super.Update(dt, joints);

    const r = joints.Get("debug.rotateSpeed");
    const m = joints.Get("debug.moveSpeed");

    if (this.robot) {
      this.robot.RotateY(r * dt);
      this.robot.MoveLocal(0, 0, m * dt);
    }
  }
}