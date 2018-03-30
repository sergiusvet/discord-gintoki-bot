import RandVariationTrigger from './rand-variation-trigger';

export default class RegExpTrigger extends RandVariationTrigger {
  constructor(regExp, ...replyVariations) {
    super(replyVariations);

    this._regExp = regExp;
    this._replyToAuthor = false;
  }

  replyToAuthor(bool = true) {
    this._replyToAuthor = bool;

    return this;
  }

  shouldListenTo(msg) {
    return this._regExp.test(msg.content);
  }

  apply(msg) {
    const replyMsg = this.randReplyVariation;

    if (this._replyToAuthor) {
      msg.reply(replyMsg)
    } else {
      msg.channel.send(replyMsg);
    }
  }
}
