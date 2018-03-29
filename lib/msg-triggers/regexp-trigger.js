import TriggerInterface from './trigger-interface';

export default class RegExpTrigger extends TriggerInterface {
  constructor(regExp, ...replyVariations) {
    super();

    this._regExp = regExp;
    this._replyVariations = replyVariations;
    this._replyToAuthor = false;
  }

  addVariation(replyVariation) {
    this._replyVariations.push(replyVariation);

    return this;
  }

  get _randReplyVariation() {
    const length = this._replyVariations.length;

    return this._replyVariations[Math.floor(Math.random() * length)];
  }

  replyToAuthor(bool = true) {
    this._replyToAuthor = bool;

    return this;
  }

  shouldListenTo(msg) {
    return this._regExp.test(msg.content);
  }

  apply(msg) {
    const replyMsg = this._randReplyVariation;

    if (this._replyToAuthor) {
      msg.reply(replyMsg)
    } else {
      msg.channel.send(replyMsg);
    }
  }
}
