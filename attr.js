/**
 * An easy library for quick coding projects to handle JS properties that are bound to external events such as the DOM.
 */

var Property = class {
  constructor(value, enterListener, exitListener) {
    this.value = value;
    this.enterListener = enterListener === undefined ? function(value) {} : enterListener;
    this.exitListener = exitListener === undefined ? function(value) {} : exitListener;
  }

  init() {
    this.enterListener(this.value);
  }

  setValue(newValue) {
    if(newValue !== this.value) this.forceSetValue(newValue);
  }

  forceSetValue(newValue) {
    this.exitListener(this.value);
    this.value = newValue;
    this.enterListener(this.value);
  }
};
