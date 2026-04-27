export class Blackboard 
{
  constructor() 
  {
    this.values = new Map();
  }

  Set(path, value) 
  {
    // If path is object key (joint-style)
    if (typeof value === "object") {
      this.values.set(path, value);
      return;
    }
    // flat key mode (legacy support)
    this.values.set(path, value);
  }

  Get(path, defaultValue = 0) 
  {
    return this.values.has(path)
      ? this.values.get(path)
      : defaultValue;
  }

  SetAxis(joint, axis, value) 
  {
    const current = this.values.get(joint) || {
      pitch: 50,
      yaw: 50,
      roll: 50
    };
    current[axis] = value;

    this.values.set(joint, current);
  }

  GetJoint(joint, defaultValue = null) 
  {
    return this.values.get(joint) ?? defaultValue;
  }

  Dump() 
  {
    console.log("Blackboard:");
    for (const [k, v] of this.values.entries()) {
      console.log(`${k} = ${v}`);
    }
  }

  Keys() 
  {
    return Array.from(this.values.keys());
  }
}