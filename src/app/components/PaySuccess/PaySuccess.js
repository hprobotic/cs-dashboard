import React from 'react';
import CSSModules from 'react-css-modules';
import refresh from './refresh.svg';
import success from './success.svg';
import styles from './PaySuccess.css';

const PaySuccess = props => (
  <div styleName="pay-success">
    <div className="icon">
      <img src={success} />
    </div>
    <h3>Payment successful</h3>
    <p>Thanks you for donate</p>
    <a className="reset" href="#">
      <img src={refresh} />
    </a>
  </div>
);

export default CSSModules(PaySuccess, styles);
