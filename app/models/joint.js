import * as THREE from "three";

export class Joint
{
  constructor(
  { 
    parent = null,
    axis = new THREE.Vector3(0, 0, 1),
    restAngle = 0,
    speed = 2
  } = {}) 
  {
    this.axis = axis;
    this.speed = speed;

    this.restAngle = restAngle;
    this.angle = restAngle;
    this.target = restAngle;

    this.pivot = new THREE.Group();

    const debug = new THREE.Mesh(
      new THREE.SphereGeometry(0.6),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    this.pivot.add(debug);
    parent?.add(this.pivot);
    this.ApplyRotation();
  }

  ApplyRotation() 
  {
    this.pivot.rotation.set(
      this.axis.x * this.angle,
      this.axis.y * this.angle,
      this.axis.z * this.angle
    );
  }

  SetRotation(angle) 
  {
    this.angle = this.restAngle + angle;
    this.ApplyRotation();
  }

  Update(dt) 
  {
    const diff = this.target - this.angle;
    this.angle += diff * this.speed * dt;

    this.ApplyRotation();
  }

  Dispose() 
  {
    this.pivot.traverse(obj => {
      if (obj.isMesh) {
        obj.geometry?.dispose();
        obj.material?.dispose();
      }
    });

    this.pivot = null;
  }
}