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
│   ├─ jointRegistry.js
│   └─ locomotion.js
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