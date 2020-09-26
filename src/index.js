import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux';
import { Provider } from 'react-redux'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      {/* </React.StrictMode> */}
    </Router>
  </Provider>
  ,
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

