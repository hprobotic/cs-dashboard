import React from 'react';
import CSSModule from 'react-css-modules';
import { Link } from 'react-router';
import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div styleName="home-page">
        <h1>Tiip.me</h1>
        <h2>Tiip.me powers membership businesses for creators.</h2>
        <div styleName="share-benefit">
          <div styleName="content-wrap">
            <div styleName="row">
              <h2 class="s1wx7loz-5 gsqaaR" color="light">
                Low, transparent fees
              </h2>
            </div>
            <div styleName="row">
              <div styleName="line-1">
                <span>
                  You keep<strong> 90%</strong>
                </span>
                <span>
                  We keep<strong> 5%</strong>
                </span>
              </div>
              <div styleName="line-2">
                <div styleName="part-1" />
                <div styleName="part-2" />
                <div styleName="part-3" />
              </div>
              <div styleName="line-3">
                <span>
                  Transaction fees average<strong> 5%</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div styleName="static">
          <div styleName="column">
            <h1 className="number">$1,000,000</h1>
            <label>PROJECTION OF TOTAL CREATOR EARNINGS THIS YEAR</label>
          </div>
          <div styleName="column">
            <h1 className="number">50,000</h1>
            <label>MONTHLY ACTIVE CREATORS</label>
          </div>
          <div styleName="column">
            <h1 className="number">1,000,000</h1>
            <label>MONTHLY ACTIVE TIIPERS</label>
          </div>
        </div>
        <Link to="/checkout" styleName="checkout-button">
          Start Now
        </Link>
      </div>
    );
  }
}

export default CSSModule(Home, styles);
