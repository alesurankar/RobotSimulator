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
    this.link1 = new Link({});
    this.scene.add(this.link1.objectRoot);
    this.objects.push(this.link1);

    // Joint (pivot)
    this.joint1 = new Joint({
      parent: this.link1.objectRoot,
    });
    this.objects.push(this.joint1);

    this.joint1.pivot.position.y = 5;

    // Second link attached to joint
    this.link2 = new Link({
      parent: this.joint1.pivot
    });
    this.objects.push(this.link2);

    // Joint (pivot)
    this.joint2 = new Joint({
      parent: this.link2.objectRoot,
    });
    this.objects.push(this.joint2);

    this.joint2.pivot.position.y = 5;

    // Third link attached to joint
    this.link3 = new Link({
      parent: this.joint2.pivot
    });
    this.objects.push(this.link3);
  }

  Update(dt) 
  {
    super.Update(dt);

    // custom robot logic here
    const t = performance.now() * 0.001;

    this.joint1.setRotation(Math.sin(t));

    this.joint2.setRotation(Math.sin(t));
  }
}