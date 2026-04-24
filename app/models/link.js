import * as THREE from "three";

export class Link
{
  constructor({ parent = null } = {}) 
  {
    const geom = new THREE.BoxGeometry(0.5, 5, 0.5);
    const mat = new THREE.MeshStandardMaterial({ color: 0xC9B903 });

    this.objectRoot = new THREE.Group();

    this.body = new THREE.Mesh(geom, mat);

    // anchor at bottom
    this.body.position.y = 2.5;

    this.objectRoot.add(this.body);

    parent?.add(this.objectRoot);
  }

  Update(dt) {}

  Dispose() 
  {
    this.body.geometry.dispose();
    this.body.material.dispose();
    this.body = null;
    this.objectRoot = null;
  }
}