import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// create store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <h1>Command Line App</h1>
      <div className="terminal">
        <div className="terminal-header">Terminal</div>
        <div className="terminal-body">
          <div className="terminal-prompt">$</div>
          <input className="terminal-input" type="text" placeholder="Enter command here" />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
