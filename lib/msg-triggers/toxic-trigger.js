import RandVariationTrigger from './rand-variation-trigger';

export default class ToxicTrigger extends RandVariationTrigger {
  constructor(replyInterval = 3600 * 1000, ...replyVariations) {
    super(replyVariations);

    this._lastRepliedAt = null;
    this._replyInterval = replyInterval;
    this._whitelistedUsers = [];
  }

  addWhitelistedUser(user) {
    this._whitelistedUsers.push(user);

    return this;
  }

  shouldListenTo(msg) {
    return !this._whitelistedUsers.includes(msg.author.username)
      && (!this._lastRepliedAt || (this._lastRepliedAt.getTime() + this._replyInterval) < Date.now());
  }

  apply(msg) {
    msg.reply(this.randReplyVariation);

    console.log(msg.author);

    this._lastRepliedAt = new Date();
  }
}
