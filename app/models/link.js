import * as THREE from "three";


export class Link
{
  constructor(
  {
    geometry = null,
    surfMat = null,
    parent = null, 
  } = {}) 
  {
    const geom = geometry || new THREE.BoxGeometry(0.5, 5, 0.5);
    const mat = surfMat || new THREE.MeshStandardMaterial({ color: 0xC9B903 });

    this.objectRoot = new THREE.Group();
    this.body = new THREE.Mesh(geom, mat);
    this.body.position.y = 2.5;
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
    if (this.body) {
      this.body.geometry.dispose();
      this.body.material.dispose();
    }

    this.body = null;
    this.objectRoot = null;
  }
}