import React from 'react';
import { render } from 'react-dom';
import './index.css';
import TrendingList from './trending-list'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'

render(
  <Provider store={store}>
    <TrendingList />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

