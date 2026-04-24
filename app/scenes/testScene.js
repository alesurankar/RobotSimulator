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
    this.robot = new Robot({
      segments: 10
    });
    this.scene.add(this.robot.root);
    this.objects.push(this.robot);
  }

  Update(dt) 
  {
    super.Update(dt);
  }
}