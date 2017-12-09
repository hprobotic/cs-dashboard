import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './CoreLayout.scss';

class CoreLayout extends React.Component {
  render() {
    return (
      <div styleName="grid-container">
        <div styleName="item-1">1</div>
        <div styleName="item-2">2</div>
        <div styleName="item-3">3</div>
        <div styleName="item-4">4</div>
        <div styleName="item-5">5</div>
        <div styleName="item-6">6</div>
      </div>
    );
  }
}

export default CSSModules(CoreLayout, styles);
