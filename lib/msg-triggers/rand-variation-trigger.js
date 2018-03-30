import TriggerInterface from './trigger-interface';

export default class RandVariationTrigger extends TriggerInterface {
  constructor(replyVariations) {
    super();

    this._replyVariations = replyVariations;
  }

  addVariation(replyVariation) {
    this._replyVariations.push(replyVariation);

    return this;
  }

  get randReplyVariation() {
    const length = this._replyVariations.length;

    return this._replyVariations[Math.floor(Math.random() * length)];
  }
}
