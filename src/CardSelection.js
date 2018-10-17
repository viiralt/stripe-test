import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, PostalCodeElement } from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>
          Name on card
          <input name="name" type="text" placeholder="Jane Doe" required />
        </label>
        <label>
          <CardNumberElement />
        </label>
        <label>
          <CardExpiryElement />
        </label>
        <label>
          <CardCVCElement />
        </label>
        <label>
          <PostalCodeElement placeholder="SW1A 2AA" />
        </label>
      </React.Fragment>
    );
  }
}

export default CardSection;
