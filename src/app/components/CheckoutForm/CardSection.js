import React from 'react';
import { Input, Label } from 'semantic-ui-react';
import {
  injectStripe,
  CardElement,
  PostalCodeElement
} from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = fontSize => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#9e2146'
      }
    }
  };
};

class CardSection extends React.Component {
  state = {
    error: undefined
  };

  stripeTokenHandler = token => {
    console.log('Token: ', token);
    this.props.stripe.charges.create(
      {
        amount: 1000,
        currency: 'usd',
        description: 'Example charge',
        source: token
      },
      function(result) {
        console.log(result);
      }
    );
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken().then(result => {
      if (result.error) {
        this.setState({
          error: {
            message: result.error.message
          }
        });
      } else {
        this.setState({ error: undefined }, () =>
          this.stripeTokenHandler(result.token)
        );
      }
    });
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="payment-form">
        <div className="form-row">
          <label>Credit or debit card</label>
          <CardElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
          {error && (
            <div className="card-errors" role="alert">
              {error.message}
            </div>
          )}
        </div>
        <button>Submit Payment</button>
      </form>
    );
  }
}

export default injectStripe(CardSection);
