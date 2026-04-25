import * as THREE from "three";

export class Link
{
  constructor(
  {
    length = 5,
    thickness = 0.5,
    color = 0xC9B903,
    shape = null,
    parent = null
  } = {}) 
  {
    this.length = length;

    let geom 
    if (shape === "sphere") {
      geom = new THREE.SphereGeometry(thickness, 10, 10);
    } 
    else {
      geom = new THREE.BoxGeometry(thickness, length, thickness);
    }
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