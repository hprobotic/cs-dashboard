import { createDevTools } from 'redux-devtools';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import storage from 'redux-persist/es/storage';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './app/reducers';
import { CoreLayout, Checkout, Charges, Home } from './app/components';
const config = {
  key: 'root',
  storage
};

const reducer = persistCombineReducers(config, {
  ...reducers,
  routing: routerReducer
});

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store);

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <div>
            <StripeProvider apiKey="pk_test_fenEJbD8JQKMfHjzzpdZvpc1">
              <Router history={history}>
                <Route path="/" component={CoreLayout}>
                  <IndexRoute component={Home} />
                  <Route path="/home" component={Home} />
                  <Route path="/charges" component={Charges} />
                  <Route path="/checkout" component={Checkout} />
                </Route>
              </Router>
            </StripeProvider>
          </div>
        </Provider>
      </PersistGate>
    );
  }
}

export default App;
