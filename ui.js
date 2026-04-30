import { Moves } from "./app/moves/moves.js";

export class UI
{
  constructor(engine) 
  {
    this.engine = engine;
    this.root = document.createElement("div");
    this.root.id = "ui";
    document.body.appendChild(this.root);
    this.zIndexCounter = 1;
    this.Build();
  }

  CreatePanel(title, x = 20, y = 20)
  {
    const panel = document.createElement("div");
    panel.className = "panel";
    panel.style.left = x + "px";
    panel.style.top = y + "px";

    const header = document.createElement("div");
    header.className = "panel-header";
    header.textContent = title;

    const content = document.createElement("div");
    content.className = "panel-content";
    content.style.display = "none";

    panel.appendChild(header);
    panel.appendChild(content);
    this.root.appendChild(panel);
    this.MakeDraggable(panel, header, content);

    return content;
  }

  Build()
  {
    const system = this.CreatePanel("System", 20, 20);
    const movesPanel = this.CreatePanel("Moves", 20, 50);
    const locomotion = this.CreatePanel("Locomotion", 20, 80);
    const torso = this.CreatePanel("Torso", 20, 110);
    const leftLeg = this.CreatePanel("Left Leg", 20, 140);
    const rightLeg = this.CreatePanel("Right Leg", 20, 170);
    const leftArm = this.CreatePanel("Left Arm", 20, 200);
    const rightArm = this.CreatePanel("Right Arm", 20, 230);

    this.AddButton("Lock", () => {
      this.engine.ToggleLock();
    }, system);

    const moveButtons = [
      { label: "Wave", move: Moves.wave },
      { label: "Punch", move: Moves.punch },
      { label: "Idle", move: Moves.idle },
    ];

    moveButtons.forEach(m => {
      this.AddButton(m.label, () => {
        this.engine.PlayMove(m.move);
      }, movesPanel);
    });

    const controls  = [
      // Locomotion
      { label: "Rotate Speed", key: "locomotion.rotateSpeed", min: 0, max: 5, default: 0, panel: locomotion },
      { label: "Move Speed", key: "locomotion.moveSpeed", min: 0, max: 10, default: 0, panel: locomotion },

      // Spine
      { label: "Spine_0 Straight", key: "spine_0.straight", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_0 Side", key: "spine_0.side", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_1 Straight", key: "spine_1.straight", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_1 Side", key: "spine_1.side", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_2 Straight", key: "spine_2.straight", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_2 Side", key: "spine_2.side", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_3 Straight", key: "spine_3.straight", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_3 Side", key: "spine_3.side", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_4 Straight", key: "spine_4.straight", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_4 Side", key: "spine_4.side", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_5 Straight", key: "spine_5.straight", min: 40, max: 90, default: 50, panel: torso },
      { label: "Spine_5 Side", key: "spine_5.side", min: 40, max: 90, default: 50, panel: torso },

      // Left Leg
      { label: "Left Hip Straight", key: "leftHip.straight", min: 40, max: 90, default: 50, panel: leftLeg },
      { label: "Left Hip Side", key: "leftHip.side", min: 10, max: 60, default: 50, panel: leftLeg },
      { label: "Left Hip Roll", key: "leftHip.roll", min: 40, max: 90, default: 50, panel: leftLeg },
      { label: "Left Knee Stretch", key: "leftKnee.stretch", min: 8, max: 50, default: 50, panel: leftLeg },
      { label: "Left Ankle Vertical", key: "leftAnkle.vertical", min: 35, max: 65, default: 50, panel: leftLeg },
      { label: "Left Ankle Horizontal", key: "leftAnkle.horizontal", min: 40, max: 60, default: 50, panel: leftLeg },
      { label: "Left Ankle Roll", key: "leftAnkle.roll", min: 47, max: 53, default: 50, panel: leftLeg },
      
      // Right Leg
      { label: "Right Hip Straight", key: "rightHip.straight", min: 40, max: 90, default: 50, panel: rightLeg},
      { label: "Right Hip Side", key: "rightHip.side", min: 10, max: 60, default: 50, panel: rightLeg},
      { label: "Right Hip Roll", key: "rightHip.roll", min: 40, max: 90, default: 50, panel: rightLeg},
      { label: "Right Knee Stretch", key: "rightKnee.stretch", min: 8, max: 50, default: 50, panel: rightLeg},
      { label: "Right Ankle Vertical", key: "rightAnkle.vertical", min: 35, max: 65, default: 50, panel: rightLeg },
      { label: "Right Ankle Horizontal", key: "rightAnkle.horizontal", min: 40, max: 60, default: 50, panel: rightLeg },
      { label: "Right Ankle Roll", key: "rightAnkle.roll", min: 52, max: 58, default: 55, panel: rightLeg },
     
      // Left Arm
      { label: "Left ShoulderBase Horizontal", key: "leftShoulderBase.horizontal", min: 10, max: 90, default: 50, panel: leftArm},
      { label: "Left ShoulderBase Vertical", key: "leftShoulderBase.vertical", min: 10, max: 90, default: 50, panel: leftArm},
      { label: "Left Shoulder Horizontal", key: "leftShoulder.horizontal", min: 10, max: 90, default: 50, panel: leftArm},
      { label: "Left Shoulder Vertical", key: "leftShoulder.vertical", min: 10, max: 90, default: 50, panel: leftArm },
      { label: "Left Shoulder Roll", key: "leftShoulder.roll", min: 10, max: 90, default: 50, panel: leftArm },
      { label: "Left Elbow", key: "leftElbow.stretch", min: 50, max: 90, default: 50, panel: leftArm },
      { label: "Left Wrist Roll", key: "leftWrist.roll", min: 35, max: 85, default: 50, panel: leftArm },
      { label: "Left Wrist", key: "leftWrist.stretch", min: 35, max: 80, default: 50, panel: leftArm },

      // Right Arm
      { label: "Right ShoulderBase Horizontal", key: "rightShoulderBase.horizontal", min: 10, max: 90, default: 50, panel: rightArm },
      { label: "Right ShoulderBase Vertical", key: "rightShoulderBase.vertical", min: 10, max: 90, default: 50, panel: rightArm },
      { label: "Right Shoulder Horizontal", key: "rightShoulder.horizontal", min: 10, max: 90, default: 50, panel: rightArm },
      { label: "Right Shoulder Vertical", key: "rightShoulder.vertical", min: 10, max: 90, default: 50, panel: rightArm },
      { label: "Right Shoulder Roll", key: "rightShoulder.roll", min: 10, max: 90, default: 50, panel: rightArm },
      { label: "Right Elbow", key: "rightElbow.stretch", min: 50, max: 90, default: 50, panel: rightArm },
      { label: "Right Wrist Roll", key: "rightWrist.roll", min: 35, max: 85, default: 50, panel: rightArm },
      { label: "Right Wrist", key: "rightWrist.stretch", min: 35, max: 80, default: 50, panel: rightArm },
    ];
    controls.forEach(c => {
      this.AddSlider(c.label, c.min, c.max, c.default, v => {
        this.engine.blackboard.Set(c.key, v);
      }, c.panel);
    });
  }

  AddButton(label, onClick, parent = this.root) 
  {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = onClick;
    parent.appendChild(btn);
  }

  AddSlider(label, min, max, value, onInput, parent = this.root)
  {
    const container = document.createElement("div");

    const text = document.createElement("div");
    text.textContent = `${label}: ${value}`;

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;

    input.oninput = (e) => {
      const v = Number(e.target.value);
      text.textContent = `${label}: ${v}`;
      onInput(v);
      //console.log("UI WRITE:", label, v);
    };

    container.appendChild(text);
    container.appendChild(input);
    parent.appendChild(container);
  }

  MakeDraggable(panel, handle, content)
  {
    let isDown = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    const DRAG_THRESHOLD = 5; 

    const onMouseMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
        panel.style.left = (e.clientX - offsetX) + "px";
        panel.style.top = (e.clientY - offsetY) + "px";
        panel.dataset.dragged = "true";
      }
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      const dragged = panel.dataset.dragged === "true";

      if (!dragged) {
        content.style.display =
          content.style.display === "none" ? "block" : "none";
      }

      panel.dataset.dragged = "false";
    };

    handle.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.clientX;
      startY = e.clientY;

      offsetX = e.clientX - panel.offsetLeft;
      offsetY = e.clientY - panel.offsetTop;

      panel.dataset.dragged = "false";

      panel.style.zIndex = ++this.zIndexCounter;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  }
}