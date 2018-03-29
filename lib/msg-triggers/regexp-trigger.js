import TriggerInterface from './trigger-interface';

export default class RegExpTrigger extends TriggerInterface {
  constructor(regExp, ...replyVariations) {
    super();

    this._regExp = regExp;
    this._replyVariations = replyVariations;
  }

  get _randReplyVariation() {
    const length = this._replyVariations.length;

    return this._replyVariations[Math.floor(Math.random() * length)];
  }

  shouldListenTo(msg) {
    return this._regExp.test(msg.content);
  }

  apply(msg) {
    msg.channel.send(this._randReplyVariation);
  }
}
