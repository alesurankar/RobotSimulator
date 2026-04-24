import * as THREE from "three";

export class Link
{
  constructor(
  {
    length = 5,
    thickness = 0.5,
    color = 0xC9B903,
    parent = null
  } = {}) 
  {
    this.length = length;

    const geom = new THREE.BoxGeometry(thickness, length, thickness);
    const mat = new THREE.MeshStandardMaterial({ color });

    this.objectRoot = new THREE.Group();

    this.body = new THREE.Mesh(geom, mat);

    // anchor at bottom of the link
    this.body.position.y = length / 2;

    this.objectRoot.add(this.body);

    parent?.add(this.objectRoot);
  }

  Dispose() 
  {
    this.body.geometry.dispose();
    this.body.material.dispose();
    this.body = null;
    this.objectRoot = null;
  }
}