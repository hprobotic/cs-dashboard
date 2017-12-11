import React from 'react';
import { Elements } from 'react-stripe-elements';
import * as API from '../../services';
import CheckoutForm from '../CheckoutForm';
import UserForm from '../UserForm';

const checkoutData = JSON.parse(localStorage.getItem('checkout')) || undefined;

class Checkout extends React.Component {
  state = {
    step: 1,
    formValue: {
      amount: 1000
    },
    isSaved: false
  };

  componentWillMount() {
    if (this.props.user) {
      this.setState({
        formValue: this.props.user.info,
        isSaved: true,
        step: 2
      });
    }
  }

  onFieldChange = (e, { name, value }) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [name]: value
      }
    });
  };

  handleBillingSubmit = () => {
    this.setState(
      {
        isSaved: true,
        step: 2
      },
      () => {
        this.props.saveCustomer(this.state.formValue);
      }
    );
  };

  handleProfileEdit = () => {
    this.setState({
      isSaved: false,
      step: 1
    });
  };

  render() {
    const { formValue, step, isSaved } = this.state;
    const { info } = this.props.user;

    return (
      <div>
        <h2>Education for Children</h2>
        {step > 0 && (
          <UserForm
            title="Billing info"
            value={formValue}
            editing={!isSaved}
            handleFieldChange={this.onFieldChange}
            handleBillingSubmit={this.handleBillingSubmit}
            handleProfileEdit={this.handleProfileEdit}
          />
        )}
        {step > 1 && <CheckoutForm title="Payment info" userInfo={formValue} />}
      </div>
    );
  }
}

export default Checkout;
