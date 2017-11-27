import React from 'react';
import Home from './Home/containers/HomeContainer';
import { Switch, Route } from 'react-router-dom';

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default AppRoutes;
