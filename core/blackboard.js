export class Blackboard 
{
  constructor() 
  {
    this.values = new Map();
  }

  Set(path, value) 
  {
    this.values.set(path, value);
  }

  Get(path, defaultValue = 0) 
  {
    return this.values.has(path)
      ? this.values.get(path)
      : defaultValue;
  }

  Register(path, defaultValue = 0) 
  {
    if (!this.values.has(path)) {
      this.values.set(path, defaultValue);
    }
  }

  Keys() 
  {
    return Array.from(this.values.keys());
  }
}