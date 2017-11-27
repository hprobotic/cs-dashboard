// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import AppRoutes from '../../routes';

class AppContainer extends React.Component<AppContainerProps> {
  render() {
    const { store } = this.props;
    return <div>hello</div>;
  }
}

export default AppContainer;
