import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from './app/containers/AppContainer';

const history = createHistory();
class App extends React.Component {
  render() {
    return (
      <Provider store={{}}>
        <ConnectedRouter history={history}>
          <AppContainer />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
