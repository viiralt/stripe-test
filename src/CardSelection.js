import React from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>
          Name on card
          <input name="name" type="text" placeholder="Jane Doe" required />
        </label>
        <label>
          Debit/Credit card number
          <CardNumberElement />
        </label>
        <label>
          Expiry date
          <CardExpiryElement />
        </label>
        <label>
          Security code
          <CardCVCElement />
        </label>
        <label>
          Billing Postcode
          <PostalCodeElement placeholder="SW1A 2AA" required />
        </label>
      </React.Fragment>
    );
  }
}

export default CardSection;
