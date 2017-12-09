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
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  stripeTokenHandler = (token, amount) => {
    console.log('Token: ', token);
    const wsUrl =
      'https://wt-9bb02c61fe43f0ab0454b4856217d79d-0.run.webtask.io/cs-stripe';
    fetch(wsUrl, {
      method: 'POST',
      body: JSON.stringify({
        token: token.id,
        amount: amount,
        description: 'Education for children'
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
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
        this.setState({ error: undefined }, () => {
          console.log('Amount: ', this.props.amount);
          this.stripeTokenHandler(result.token, this.props.amount);
        });
      }
    });
  };
  render() {
    const { error } = this.state;
    const { amount } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="payment-form">
        <div className="form-row">
          <label>Credit or debit card: {amount}</label>
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
