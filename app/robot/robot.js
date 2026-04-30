import * as THREE from "three";
import * as Segment from "./segmentFactory.js"

export class Robot
{
  constructor()
  {
    this.root = new THREE.Group();
    this.model = new THREE.Group();
    this.root.add(this.model);
    
    this.limbs = {};
    this.torso = Segment.CreateTorso();
    this.leftArm = Segment.CreateLeftArm();
    this.rightArm = Segment.CreateRightArm();
    this.leftLeg = Segment.CreateLeftLeg();
    this.rightLeg = Segment.CreateRightLeg();

    this.AddLimb("torso", this.torso, this.model);
    this.AddLimb("leftArm", this.leftArm, this.torso.joints[9].pivot);
    this.AddLimb("rightArm", this.rightArm, this.torso.joints[9].pivot);
    this.AddLimb("leftLeg", this.leftLeg, this.torso.root);
    this.AddLimb("rightLeg", this.rightLeg, this.torso.root);

    this.leftLeg.root.position.set(1.2, 0, 0);
    this.leftLeg.root.rotation.set(0, 0, -3.1);
    this.rightLeg.root.position.set(-1.2, 0, 0);
    this.rightLeg.root.rotation.set(0, 0, 3.1);

    this.model.position.y = 10;

    this.limbs = {
      leftLeg: this.leftLeg,
      rightLeg: this.rightLeg,
      leftArm: this.leftArm,
      rightArm: this.rightArm
    };
  }

  AddLimb(name, limb, parent) 
  {
    parent.add(limb.root);
    this.limbs[name] = limb;
  }

  RegisterPoseSystem(poseSystem)
  {
    this.torso.Register("torso", poseSystem);
    this.leftArm.Register("leftArm", poseSystem);
    this.rightArm.Register("rightArm", poseSystem);
    this.leftLeg.Register("leftLeg", poseSystem);
    this.rightLeg.Register("rightLeg", poseSystem);
  }

  SetPosition(x, y, z)
  {
    this.root.position.set(x, y, z);
  }

  SetRotation(x, y, z)
  {
    this.root.rotation.set(x, y, z);
  }

  MoveWorld(dx, dy, dz)
  {
    this.root.position.add(new THREE.Vector3(dx, dy, dz));
  }

  MoveLocal(dx, dy, dz)
  {
    const v = new THREE.Vector3(dx, dy, dz);
    v.applyQuaternion(this.root.quaternion);
    this.root.position.add(v);
  }

  RotateX(angle)
  {
    this.root.rotateX(angle);
  }

  RotateY(angle)
  {
    this.root.rotateY(angle);
  }

  RotateZ(angle)
  {
    this.root.rotateZ(angle);
  }

  Update(dt, blackboard)
  {
  }

  Dispose()
  {
    this.torso.Dispose();
    this.leftArm.Dispose();
    this.rightArm.Dispose();
    this.leftLeg.Dispose();
    this.rightLeg.Dispose();

    this.root.removeFromParent();
  }
}