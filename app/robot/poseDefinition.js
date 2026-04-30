function GeneratePoseDefinition(limb)
{
  return limb.joints.map(j => j.name);
}