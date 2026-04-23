import * as THREE from "three";
import { BaseScene } from "./baseScene.js"
import { Link } from "../models/link";
import { Joint } from "../models/joint";


export class TestScene extends BaseScene
{
  constructor(scene, camera, player) 
  {  
    super(scene, camera, player);
    this.cameraSettings = { near: this.near, far: this.far };
  }

  CreateObjects()
  {
    // create robotBody
    this.robotBody = new Link({
    });
    this.scene.add(this.robotBody.objectRoot);
    this.objects.push(this.robotBody);

    // create one joint
    this.joint1 = new Joint({
      parent: this.robotBody.objectRoot,
    });
    this.objects.push(this.joint1);
  }
}