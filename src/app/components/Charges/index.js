import React from 'react';
import { Link } from 'react-router';
import {
  Button,
  Checkbox,
  Icon,
  Table,
  Dropdown,
  Loader
} from 'semantic-ui-react';
import * as API from '../../services';

class PaymentTable extends React.Component {
  render() {
    const { payments } = this.props;
    return (
      <div>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell />
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Donator</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {payments.map(payment => (
              <Table.Row key={payment.id}>
                <Table.Cell>{payment.amount}</Table.Cell>
                <Table.Cell>{payment.currency.toUpperCase()}</Table.Cell>
                <Table.Cell>
                  {payment.description + ' ' + payment.id}
                </Table.Cell>
                <Table.Cell>{payment.customer}</Table.Cell>
                <Table.Cell>{payment.created}</Table.Cell>
                <Table.Cell>x</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

class Charges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      loading: true
    };
  }

  componentDidMount() {
    API.stripe('charges').then(result => {
      this.setState({
        payments: result.message.data || [],
        loading: false
      });
    });
  }

  render() {
    const { payments, loading } = this.state;
    const haveData = payments.length > 0;
    return (
      <div>
        <h2>Charges</h2>
        {loading && <Loader active inline="centered" />}
        {haveData && <PaymentTable payments={payments} />}
      </div>
    );
  }
}

export default Charges;
