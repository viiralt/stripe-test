import React, { Component } from 'react';
import { injectStripe } from 'react-stripe-elements';

import CardSection from './CardSelection';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      completed: false,
    };
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: 'Jane Doe' });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id,
    });

    if (response.ok) this.setState({ completed: true });
  }

  render() {
    const { completed } = this.state;
    if (completed) return <h1>Payment successful!</h1>;

    return (
      <div className="checkout">
        <CardSection />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
