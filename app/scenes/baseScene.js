import * as THREE from "three";
import { SkyBox } from "../visuals/skyBox.js";


export class BaseScene 
{
  constructor(scene, camera, player, skyBoxName = "skyBox") 
  {
    this.active = true;
    
    this.cameraSettings = {
      pos: { x: 0, y: 0, z: 10 },
      lookAt: { x: 0, y: 0, z: 0 },
      fov: 60,
      near: 1,
      far: 1000
    };
    this.scene = scene;
    this.scene.background = SkyBox.Load(skyBoxName);
    this.camera = camera;
    this.player = player;
    this.objects = [];
    this.objectMap = {};
  }

  Init() 
  {
    if (!this.active) return;
    try {
      this.CreateObjects();
    }
    catch (err) {
      console.error("Failed to create objets", err);
    }
  }

  Update(dt, state) 
  {
    for (const obj of this.objects) {
      if (obj && typeof obj.Update === "function") {
        obj.Update(dt, state);
      }
    }
  }

  Dispose() 
  {
    this.active = false;
    this.objects.forEach(obj => obj?.Dispose());
    this.objects = [];
    if (this.sceneTriggers) {
        this.sceneTriggers = [];
    }

    // Dispose skybox
    if (this.scene?.background) {
      SkyBox.Dispose(this.scene.background);
      this.scene.background = null;
    }
    // Clear objectMap to remove references
    this.objectMap = {};
  }
}