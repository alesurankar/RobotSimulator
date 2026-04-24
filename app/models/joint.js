import * as THREE from "three";

export class Joint
{
  constructor({ parent = null } = {}) 
  {
    this.axis = new THREE.Vector3(0, 0, 1);
    this.angle = 0;

    this.pivot = new THREE.Group();

    // debug sphere
    const debug = new THREE.Mesh(
      new THREE.SphereGeometry(0.6),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );

    this.pivot.add(debug);

    parent?.add(this.pivot);
  }

  setRotation(angle) 
  {
    this.angle = angle;

    this.pivot.rotation.set(
      this.axis.x * angle,
      this.axis.y * angle,
      this.axis.z * angle
    );
  }

  Update(dt) {}

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