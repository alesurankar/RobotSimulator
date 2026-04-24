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
      pos: { x: -10, y: 10, z: 10 },
      lookAt: { x: 0, y: 0, z: 0 },
      fov: 40
    };
  }

  CreateObjects()
  {
    // Base link
    this.robotBody = new Link({});
    this.scene.add(this.robotBody.objectRoot);
    this.objects.push(this.robotBody);

    // Joint (pivot)
    this.joint1 = new Joint({
      parent: this.robotBody.objectRoot,
    });
    this.objects.push(this.joint1);

    this.joint1.pivot.position.y = 5;

    // Second link attached to joint
    this.link2 = new Link({
      parent: this.joint1.pivot
    });
    this.objects.push(this.link2);
  }

  Update(dt) {
    super.Update(dt);

    // custom robot logic here
    const t = performance.now() * 0.001;

    this.joint1.setRotation(Math.sin(t));
  }
}