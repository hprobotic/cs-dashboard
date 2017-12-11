import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { saveInfo } from '../../reducers/user';
import Checkout from './Checkout';

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getCustomer: id => {
    console.log(id);
  },
  saveCustomer: info => {
    dispatch(saveInfo(info));
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Checkout);
