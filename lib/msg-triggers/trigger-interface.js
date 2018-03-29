export default class TriggerInterface {
  shouldListenTo(msg) {
    throw new Error('Should return boolean');
  }

  apply(msg) {
    throw new Error()
  }
}
