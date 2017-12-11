import React from 'react';
import CSSModules from 'react-css-modules';
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
import styles from './UserForm.css';

class UserForm extends React.Component {
  handleChange = (e, { name, value }) => {
    this.props.handleFieldChange(e, { name, value });
  };

  render() {
    const { value, title, editing } = this.props;
    return (
      <d>
        <h3>{title}:</h3>
        {editing && (
          <div>
            <Form onSubmit={this.props.handleBillingSubmit}>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  label="First name"
                  name="firstName"
                  value={value.firstName}
                  placeholder="First name"
                  onChange={this.props.handleFieldChange}
                  required
                />
                <Form.Field
                  control={Input}
                  label="Last name"
                  name="lastName"
                  value={value.lastName}
                  placeholder="Last name"
                  onChange={this.props.handleFieldChange}
                  required
                />
              </Form.Group>
              <Form.Field
                control={Input}
                label="Email"
                name="email"
                value={value.email}
                placeholder="Email"
                onChange={this.props.handleFieldChange}
                required
              />
              <Form.Field
                control={Input}
                label={`Amount ${value.amount}$`}
                type="range"
                min="1000"
                value={value.amount}
                max="10000"
                name="amount"
                onChange={this.props.handleFieldChange}
                required
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
          </div>
        )}
        {!editing && (
          <pre styleName="user-info">
            <p>
              Name:{' '}
              <strong>
                {value.firstName} {value.lastName}
              </strong>
            </p>
            <p>
              Email: <strong>{value.email}</strong>
            </p>
            <p>
              Default Amount: <strong>${value.amount}</strong>
            </p>
            <p>
              <a href="#" onClick={this.props.handleProfileEdit}>
                Edit information
              </a>
            </p>
          </pre>
        )}
      </d>
    );
  }
}

export default CSSModules(UserForm, styles);
