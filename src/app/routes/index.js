import React from 'react';
import HomeContainer from './Home/containers/HomeContainer';
import { Switch, Route } from 'react-router-dom';

class AppRoutes extends React.Component {
  render() {
    return (
      <Route path="/" component={HomeContainer}>
        <Route path="foo" component={HomeContainer} />
        <Route path="bar" component={HomeContainer} />
      </Route>
    );
  }
}

export default AppRoutes;
