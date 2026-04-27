export class UI
{
  constructor(engine) 
  {
    this.engine = engine;
    this.root = document.createElement("div");
    this.root.id = "ui";
    document.body.appendChild(this.root);
    this.Build();
  }

  Build()
  {
    const isTouch = navigator.maxTouchPoints > 0;

    if (!isTouch) {
      this.AddButton("Lock", () => {
        this.engine.ToggleLock();
      });
    }
    const locomotionControls = [
      { label: "Rotate Speed", key: "locomotion.rotateSpeed", min: 0, max: 5, default: 0 },
      { label: "Move Speed", key: "locomotion.moveSpeed", min: 0, max: 10, default: 0 },
    ];

    const poseControls  = [
      { label: "Left Knee", key: "leftKnee.stretch", min: 0, max: 100, default: 0 },
      { label: "Right Knee", key: "rightKnee.stretch", min: 0, max: 100, default: 0 },

      { label: "Left Shoulder Pitch", key: "leftShoulder.pitch", min: 0, max: 100, default: 50 },
      { label: "Left Shoulder Yaw", key: "leftShoulder.yaw", min: 0, max: 100, default: 50 },
      { label: "Left Shoulder Roll", key: "leftShoulder.roll", min: 0, max: 100, default: 50 },

      { label: "Right Shoulder Pitch", key: "rightShoulder.pitch", min: 0, max: 100, default: 50 },
      { label: "Right Shoulder Yaw", key: "rightShoulder.yaw", min: 0, max: 100, default: 50 },
      { label: "Right Shoulder Roll", key: "rightShoulder.roll", min: 0, max: 100, default: 50 },
    ];

    locomotionControls.forEach(c => {
      this.AddSlider(c.label, c.min, c.max, c.default, v => {
        this.engine.blackboard.Set(c.key, v);
      });
    });
    poseControls.forEach(c => {
      this.AddSlider(c.label, c.min, c.max, c.default, v => {
        this.engine.blackboard.Set(c.key, v);
      });
    });
  }

  AddButton(label, onClick) 
  {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = onClick;
    this.root.appendChild(btn);
    return btn;
  }

  AddSlider(label, min, max, value, onInput) 
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
    };

    container.appendChild(text);
    container.appendChild(input);
    this.root.appendChild(container);

    return input;
  }
}