export class SimpleLegIK
{
  constructor(upperLen, lowerLen)
  {
    this.upperLen = upperLen;
    this.lowerLen = lowerLen;
  }

  Solve(targetX, targetY)
  {
    const x = targetX;
    const y = targetY;

    const dist = Math.sqrt(x * x + y * y);

    const maxReach = this.upperLen + this.lowerLen;
    const minReach = Math.abs(this.upperLen - this.lowerLen);

    const d = Math.min(Math.max(dist, minReach), maxReach);

    const baseAngle = Math.atan2(y, x);

    const cosKnee =
      (this.upperLen**2 + this.lowerLen**2 - d**2) /
      (2 * this.upperLen * this.lowerLen);

    const knee = Math.acos(Math.min(Math.max(cosKnee, -1), 1));

    const cosHip =
      (d**2 + this.upperLen**2 - this.lowerLen**2) /
      (2 * this.upperLen * d);

    const hipOffset = Math.acos(Math.min(Math.max(cosHip, -1), 1));

    const hip = baseAngle - hipOffset;

    return { hip, knee };
  }

  Update(dt, blackboard, target)
  {
    const result = this.Solve(target.x, target.y);

    const hipValue = (result.hip / Math.PI) * 50 + 50;
    const kneeValue = (result.knee / Math.PI) * 50;

    blackboard.Set("leftHip.straight", hipValue);
    blackboard.Set("leftKnee.stretch", kneeValue);
  }
}