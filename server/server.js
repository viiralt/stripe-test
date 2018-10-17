const app = require('express')();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

app.use(require('body-parser').text());

// ! Once you’ve securely collected and tokenized your customer’s credit card using Elements, you can charge the card immediately ==> composer require stripe/stripe-php (https://stripe.com/docs/charges, https://stripe.com/docs/api?lang=php)

app.post('/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body,
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(9000, () => console.log('Listening on port 9000'));
