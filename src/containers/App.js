import React, { Component } from 'react';
import Breakisolation from './Breakisolation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';
import './App.scss';

const reducer = combineReducers(reducers);
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
