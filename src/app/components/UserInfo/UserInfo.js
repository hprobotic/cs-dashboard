import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './UserInfo.scss';

class UserInfo extends React.Component {
  render() {
    const { props } = this;
    return (
      <div styleName="user">
        dfdfdsf
        <div styleName="pic" />
        <div styleName="meta">
          <p styleName="name">
            {props.firstName} {props.lastName}
          </p>
          <p styleName="email">{props.email}</p>
        </div>
      </div>
    );
  }
}

export default CSSModules(UserInfo.styles);
