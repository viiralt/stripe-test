import React from 'react';
import { injectStripe } from 'react-stripe-elements';

import CardSection from './CardSelection';
class CheckoutForm extends React.Component {
  state = {
    completed: false,
  };

  generateToken = e => {
    e.preventDefault();
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', token);
      this.submitPayment(token);
    });
  };

  submitPayment = async token => {
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id,
    });
    if (response.ok) this.setState({ completed: true });
  };

  render() {
    const { completed } = this.state;

    if (completed) return <h1>Payment successful!</h1>;

    return (
      <div>
        <form onSubmit={this.generateToken}>
          <CardSection />
          <button>confirm payment</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
