import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Terminal from 'react-native-terminal';
import store from './store';

import SampleModule from './modules/sample/components';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/sample">
            <SampleModule />
          </Route>
          <Route path="/">
            <Terminal
              greeting="Which module would you like to select?"
              commands={{
                'sample': () => {
                  window.location = '/sample';
                }
              }}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
