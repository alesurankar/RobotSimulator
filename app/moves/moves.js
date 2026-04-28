export const Moves = {
  wave: {
    pose: {
      leftShoulder: { horizontal: 45, vertical: 65, roll: 30 },
      leftElbow: { stretch: 60 },
      leftWrist: { roll: 70, stretch: 45},
    },
    duration: 0.8
  },

  punch: {
    pose: {
      rightShoulder: { horizontal: 70, vertical: 40, roll: 50 },
      rightElbow: { stretch: 60 },
      rightWrist: { roll: 55, stretch: 55 },
    },
    duration: 0.3
  },

  idle: {
    pose: {      
      leftShoulder: { horizontal: 45, vertical: 35, roll: 50 },
      leftElbow: { stretch: 55 },
      leftWrist: { roll: 55, stretch: 50 },

      rightShoulder: { horizontal: 45, vertical: 65, roll: 50 },
      rightElbow: { stretch: 55 },
      rightWrist: { roll: 45, stretch: 50 },
    },
    duration: 0.8
  }
};