import * as THREE from "three";
import { BaseScene } from "./baseScene.js"
import { Link } from "../models/link.js";
import { Joint } from "../models/joint.js";


export class TestScene extends BaseScene
{
  constructor(scene, camera, player) 
  {  
    super(scene, camera, player);
    this.cameraSettings = {
      pos: { x: -1000, y: 1000, z: 1000 },
      lookAt: { x: 0, y: 0, z: 0 },
      fov: 40
    };
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