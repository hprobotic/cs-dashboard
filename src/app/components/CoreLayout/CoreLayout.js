import React from 'react';
import CSSModules from 'react-css-modules';
import { Menu, Card, Image } from 'semantic-ui-react';
import { Link, browserHistory, Route } from 'react-router';
import styles from './CoreLayout.css';

class CoreLayout extends React.Component {
  state = { activeItem: 'home' };

  componentDidMount() {
    const currentTab = browserHistory
      .getCurrentLocation()
      .pathname.split('/')[1];
    this.setState({
      activeItem: currentTab || 'home'
    });
  }

  handleItemClick = (e, { name }) => {
    browserHistory.push(`/${name}`);
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    const { children } = this.props;
    return (
      <div styleName="grid-container">
        <div styleName="item-1">{this.props.children}</div>
        <div styleName="item-2">
          <div styleName="item-3">
            <div className="hi">
              <a styleName="logo" href="/">
                <span styleName="logoIcon" />
                <div styleName="logoText">
                  <span styleName="logoTitle">
                    <strong>TIIP.</strong>ME
                  </span>
                  <span styleName="logoDescription">
                    <span>Let's </span>get you paid{' '}
                  </span>
                </div>
              </a>
            </div>
            <Menu pointing secondary fluid inverted vertical>
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="charges"
                active={activeItem === 'charges'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="checkout"
                active={activeItem === 'checkout'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </div>
        </div>
        <div styleName="item-4" />
      </div>
    );
  }
}

export default CSSModules(CoreLayout, styles);
