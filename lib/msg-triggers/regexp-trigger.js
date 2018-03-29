import TriggerInterface from './trigger-interface';

export default class RegExpTrigger extends TriggerInterface {
  constructor(regExp, replyMsg) {
    super();

    this._regExp = regExp;
    this._replyMsg = replyMsg;
  }

  shouldListenTo(msg) {
    return this._regExp.test(msg.content);
  }

  apply(msg) {
    msg.channel.send(this._replyMsg);
  }
}
