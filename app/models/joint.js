import * as THREE from "three";

export class Joint
{
  constructor(
  { 
    parent = null,
    axis = new THREE.Vector3(0, 0, 1),
    restRotation = new THREE.Euler(),
  } = {}) 
  {
    this.axis = axis;
    this.restRotation = restRotation;

    this.angle = 0;
    this.pivot = new THREE.Group();

    const debug = new THREE.Mesh(
      new THREE.SphereGeometry(0.55),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    this.pivot.add(debug);
    parent?.add(this.pivot);
    this.ApplyRotation();
  }

  ApplyRotation() 
  {
    const restQuat = new THREE.Quaternion().setFromEuler(this.restRotation);
    const animQuat = new THREE.Quaternion().setFromAxisAngle(
      this.axis,
      this.angle
    );
    this.pivot.quaternion.copy(restQuat).multiply(animQuat);
  }

  SetRotation(angle) 
  {
    this.angle = angle;
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