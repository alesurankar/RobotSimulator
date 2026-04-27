## 🤖 Robot Simulator
![Robot Demo](./demo.gif)

A modular humanoid robot simulator built with Three.js.

The system models a robot as a hierarchy of joints and limbs, with a real-time pose system driven by a blackboard and UI controls.


## 🧠 Core Concepts
Joint
- Single-axis rotational unit
- Has limits (minAngle, maxAngle)
- Applies rotation around its defined axis

Limb
- Chain of joints + links
- Represents arms, legs, torso segments

Robot
- Composition of limbs
- Defines overall skeleton structure

PoseSystem
- Reads values from the blackboard
- Converts UI input → joint rotations

Blackboard
- Shared state system
- Used for communication between UI, input, and systems

UI
- Provides sliders for controlling joints in real-time
- Outputs normalized values (e.g. -1 → 1)


## 🎮 Features
- Real-time joint manipulation
- Multi-axis shoulder control (pitch, yaw, roll)
- Modular limb construction
- Blackboard-driven animation system
- Desktop + mobile input support


## 🏗 Project Structure
```text
RobotSimulator/
├─ app/
│   ├─ input/
│   │   ├─ desktopInput.js
│   │   ├─ inputStare.js
│   │   └─ mobileInjput.js
│   │
│   ├─ models/
│   │   ├─ joint.js
│   │   ├─ limb.js
│   │   ├─ link.js
│   │   └─ robot.js
│   │
│   ├─ moves/
│   │   ├─ animate.js
│   │   └─ moves.js
│   │
│   ├─ scenes/
│   │   ├─ baseScene.js
│   │   └─ testScene.js
│   │
│   ├─ textures/
│   ├─ utils/
│   │   └─ gameControls.js
│   │
│   └─ visuals/
│       └─ skyBox.js
│
├─ core/
│   ├─ blackboard.js
│   ├─ locomotion.js
│   └─ poseSystem.js
│
├─ src/
│   ├─ Engine.js
│   ├─ RendererSetup.js
│   ├─ SceneManager.js
│   ├─ Scenes.js
│   └─ SceneSetup.js
│
├─ index.html
├─ main.js
├─ style.css
└─ ui.js
```