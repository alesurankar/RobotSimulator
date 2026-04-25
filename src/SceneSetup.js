import * as THREE from "three";
import { SceneManager } from "./SceneManager.js";
import { Camera } from "./RendererSetup.js";
import { TestScene } from "../app/scenes/testScene.js";


// Scene
export const Scene = new THREE.Scene();
 
const ambientLight = new THREE.AmbientLight(0xddffff, 0.5);
Scene.add(ambientLight);

const dirLight1 = new THREE.DirectionalLight(0xffddff, 2);
dirLight1.position.set(5, 10, 5);
dirLight1.castShadow = true;
Scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0xffffdd, 2);
dirLight2.position.set(-5, 10, -5);
dirLight2.castShadow = true;
Scene.add(dirLight2);

const manager = new SceneManager(Scene, Camera);

manager.LoadScene(TestScene);

export function Update(timeScale) 
{
  manager.Update(timeScale);
}