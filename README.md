# ember-cli-stripejs

The simplest way to load and configure [Stripe JS](https://stripe.com/docs/tutorials/forms) in your ember-cli application.

## Installation

* npm install --save-dev ember-cli-stripejs

## Configuration

Add your Stripe public key to your app config. Obviously, don't add your secret key.

```javascript
// config/environment.js
ENV.stripe = {
  key: "pk_test_C0sa3IlkLWBlrB8laH2fbqfh"
};
```

## Usage

Use Stripe JS has you normally would.

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
