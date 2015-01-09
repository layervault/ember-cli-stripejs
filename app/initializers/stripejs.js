import config from '../config/environment';

export function initialize(/* container, application */) {
  if (!config.stripe.key) {
    throw "No Stripe key set. Please set `ENV.stripe.key` to your Stripe public key. Look in config/environment.js."
  }
  Stripe.setPublishableKey(config.stripe.key);
}

export default {
  name: 'stripejs',
  initialize: initialize
};
