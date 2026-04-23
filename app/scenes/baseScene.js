import * as THREE from "three";
import { SkyBox } from "../visuals/skyBox.js";
import { loadEntities } from "../utils/loadEntities.js"


export class BaseScene 
{
  // Step 10
  constructor(scene, camera, player, skyBoxName = "skyBox") 
  {
    this.active = true;
    this.timeFactor=1

    this.SIZE_SCALE = 1;
    
    this.near = 1;
    this.far = 200;
    this.cameraSettings = { near: this.near,far: this.far };
    this.scene = scene;
    this.scene.background = SkyBox.Load(skyBoxName);
    this.camera = camera;
    this.player = player;
    this.focus = focus;
    this.objects = [];
    this.objectMap = {};
  }

  async Init() 
  {
    if (!this.active) return;

    try {
      this.CreateObjects();
    }
    catch (err) {
      console.error("Failed to create objets", err);
    }
  }

  Update(dt) 
  {
    for (const obj of this.objects) {
      obj.Update(dt * this.timeFactor);
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