export class Animator
{
  constructor()
  {
    this.active = null;
  }

  Play(targetPose, duration, blackboard)
  {
    const startPose = {};

    for (const key in targetPose) {
      startPose[key] = blackboard.Get(key, 0);
    }

    this.active = {
      start: startPose,
      target: targetPose,
      time: 0,
      duration
    };
  }

  Update(dt, blackboard)
  {
    if (!this.active) return;

    const a = this.active;
    a.time += dt;

    const t = Math.min(a.time / a.duration, 1);
    const k = t * t * (3 - 2 * t);

    for (const key in a.target)
    {
      const start = a.start[key];
      const end = a.target[key];
      blackboard.Set(key, start + (end - start) * k);
    }

    if (t >= 1)
      this.active = null;
  }
}