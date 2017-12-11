import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { Loader } from 'semantic-ui-react';
import PayResult from '../PayResult/PayResult';

const createOptions = fontSize => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
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
      error: undefined,
      paying: true,
      loading: false,
      currentCheckoutStatus: 'Starting...',
      status: {
        paySuccess: false,
        message: ''
      }
    };
  }

  stripeTokenHandler = (token, amount) => {
    const wsUrl =
      'https://wt-9bb02c61fe43f0ab0454b4856217d79d-0.run.webtask.io/stripe/charges';
    fetch(wsUrl, {
      method: 'POST',
      body: JSON.stringify({
        stripeToken: token.id,
        amount: amount,
        description: 'Education for children',
        currency: 'usd'
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          paying: false,
          status: {
            paySuccess: true,
            message: 'Hello'
          },
          currentCheckoutStatus: 'Charged, thanks you...',
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          paying: false,
          status: {
            paySuccess: false,
            message: JSON.stringify(error)
          },
          currentCheckoutStatus: 'Charged failed, please check again...',
          loading: false
        });
        console.error(error);
      });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({ loading: true });
    this.props.stripe.createToken().then(result => {
      if (result.error) {
        this.setState({
          error: {
            message: result.error.message
          },
          currentCheckoutStatus: 'Error...'
        });
      } else {
        this.setState({ error: undefined }, () => {
          this.setState(
            {
              currentCheckoutStatus: 'Generated token, marking a charge...'
            },
            () => {
              this.stripeTokenHandler(result.token, this.props.amount);
            }
          );
        });
      }
    });
  };

  refreshCheckout = () => {
    this.setState({
      paying: true
    });
  };

  render() {
    const {
      error,
      paying,
      status,
      loading,
      currentCheckoutStatus
    } = this.state;
    const { amount } = this.props;
    return (
      <div>
        {paying && (
          <form onSubmit={this.handleSubmit} className="payment-form">
            <div className="form-row">
              <h4>Credit or debit card: {amount} $</h4>
              <CardElement {...createOptions(this.props.fontSize)} />
              {error && (
                <div className="card-errors" role="alert">
                  {error.message}
                </div>
              )}
            </div>
            <button>Submit Payment</button>
          </form>
        )}
        {loading && (
          <Loader active inline="centered">
            {currentCheckoutStatus}
          </Loader>
        )}
        {!paying && <PayResult info={status} refresh={this.refreshCheckout} />}
      </div>
    );
  }
}

export default injectStripe(CardSection);
