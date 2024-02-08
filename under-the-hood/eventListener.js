class EventTarget {
  constructor() {
    this.events = new Map();
  }

  addEventListener(name, callback) {
    if (this.events.has(name)) {
      this.events.set(name, [...this.events.get(name), callback]);
    } else {
      this.events.set(name, [callback]);
    }
  }

  removeEventListener(name, callback) {
    if (!this.events.has(name)) {
      return;
    }

    const callbacks = this.events.get(name);
    const index = callbacks.indexOf(callback);
    if (index > -1) {
      callbacks.splice(index, 1);
      this.events.set(name, callbacks);
    }
  }

  dispatchEvent(name) {
    if (!this.events.has(name)) {
      return;
    }

    const callbacks = this.events.get(name);
    callbacks.forEach((callback) => callback());
  }
}

const eventTarget = new EventTarget();

function handleClickButton() {
  console.log("Button clicked");
}
eventTarget.addEventListener("click", handleClickButton);
eventTarget.dispatchEvent("click");
eventTarget.removeEventListener("click", handleClickButton);

function handleHoverButton() {
  console.log("Button hovered");
}
eventTarget.addEventListener("hover", handleHoverButton);
eventTarget.dispatchEvent("hover");
eventTarget.removeEventListener("hover", handleHoverButton);
