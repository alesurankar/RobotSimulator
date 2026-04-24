import * as THREE from "three";


export class Joint
{
  constructor(
  { 
    parent = null,
    axis = new THREE.Vector3(0, 0, 1)
  } = {}) 
  {
    this.axis = axis;
    this.angle = 0;
    this.pivot = new THREE.Group();
    const debug = new THREE.Mesh(
      new THREE.SphereGeometry(0.6),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    this.pivot.add(debug);
    parent?.add(this.pivot);
  }

  setRotation(angle) {
    this.angle = angle;

    this.pivot.rotation.set(
      this.axis.x * angle,
      this.axis.y * angle,
      this.axis.z * angle
    );
  }
  
  Update(dt) {
    if (this.target === undefined) this.target = 0;
    if (this.speed === undefined) this.speed = 2;

    const diff = this.target - this.angle;

    this.angle += diff * this.speed * dt;

    this.pivot.rotation.set(
      this.axis.x * this.angle,
      this.axis.y * this.angle,
      this.axis.z * this.angle
    );
  }

  Dispose() 
  {
    if (this.pivot) {
      this.pivot.traverse(obj => {
        if (obj.isMesh) {
          obj.geometry.dispose();
          obj.material.dispose();
        }
      });
    }

    this.pivot = null;
  }
}