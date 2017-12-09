import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Message
} from 'semantic-ui-react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm';

class Checkout extends React.Component {
  state = {
    isFormValidate: false,
    formValue: {
      amount: 1000
    }
  };

  handleChange = (e, { name, value }) =>
    this.setState({
      formValue: {
        ...this.state.formValue,
        [name]: value
      }
    });

  handleSubmit = () => {
    console.log(this.state.formValue);
    this.setState({ isFormValidate: true });
  };

  render() {
    const {
      isFormLoading,
      isFormValidate,
      firstName,
      lastName,
      amount,
      email
    } = this.state.formValue;
    return (
      <div>
        <h2>Education for Children</h2>
        <h3>Donator Info: </h3>
        <Form onSubmit={this.handleSubmit} loading={isFormLoading}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First name"
              name="firstName"
              placeholder="First name"
              onChange={this.handleChange}
              required
              readOnly={isFormValidate}
            />
            <Form.Field
              control={Input}
              label="Last name"
              name="lastName"
              placeholder="Last name"
              onChange={this.handleChange}
              required
              readOnly={isFormValidate}
            />
          </Form.Group>
          <Form.Field
            control={Input}
            label="Email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            required
            readOnly={isFormValidate}
          />
          <Form.Field
            control={Input}
            label={`Amount ${amount}$`}
            type="range"
            min="1000"
            value={amount}
            max="10000"
            name="amount"
            onChange={this.handleChange}
            required
            readOnly={isFormValidate}
          />
          <Message
            positive
            header="Send your loved one a free card during checkout."
            content="Donate more than 1000$ or get out :)"
          />
          <Form.Field
            control={Checkbox}
            name="term"
            checked
            label="I agree to the Terms and Conditions"
            required
            readOnly
          />
          <Form.Button content="Save" />
        </Form>
        <h3>Payment info: </h3>
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;
