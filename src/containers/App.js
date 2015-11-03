import React, { Component } from 'react';
import Breakisolation from './Breakisolation';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers/reducer';
import './App.scss';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (<Provider store={store}>
              <Breakisolation />
            </Provider>);
  }
}
