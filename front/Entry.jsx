import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/Routes';
import {Provider} from 'react-redux';
import store from './store/store';

import SocketListeners from './socket'

//scss
import './scss/app.scss';

SocketListeners(store)

ReactDOM.render(
  <Provider store={store}>
    <Router  history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
