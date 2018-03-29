export default class MessageHandler {
  constructor(...triggers) {
    this._triggers = triggers;
  }

  addTrigger(trigger) {
    this._triggers.push(trigger);
  }

  handle(msg) {
    this._triggers
      .filter(trigger => trigger.shouldListenTo(msg))
      .forEach(trigger => trigger.apply(msg));
  }
}
