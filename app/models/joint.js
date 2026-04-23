import * as THREE from "three";


export class Joint
{
  constructor(
  {
    surfMat = null,
    geometry = null,
    parent = null, 
  } = {}) 
  {
    this.body = new THREE.Mesh(geometry, surfMat);
    this.objectRoot = new THREE.Group();   // position
    this.objectRoot.add(this.body);
    
    if (parent) {
      parent.add(this.objectRoot);
    }
  }

  Update(dt) 
  {

  }

  Dispose() 
  {
    this.body = null;
    this.geometry = null;
    this.objectRoot = null;
  }
}