import React from 'react';
import CSSModules from 'react-css-modules';
import refresh from './refresh.svg';
import success from './success.svg';
import failed from './failed.svg';
import styles from './PayResult.css';

const PayResult = props => (
  <div styleName={props.info.paySuccess ? `pay-success` : `pay-failed`}>
    <div className="icon">
      <img src={props.info.paySuccess ? success : failed} />
    </div>
    <h3>
      {props.info.paySuccess ? `Payment successful` : `Somthings wrong :(`}
    </h3>
    <p>
      {props.info.paySuccess ? `Thanks you for donate` : `Please try again`}
    </p>
    <a className="reset" onClick={props.refresh}>
      <img src={refresh} />
    </a>
  </div>
);

export default CSSModules(PayResult, styles);
