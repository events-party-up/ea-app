import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';

import reducers from './src/reducers';
import './src/utils/reactotron';

import Main from './src/containers/Main';

export default class App extends Component {
  render() {
    return (
      <Provider
        store={Reactotron.createStore(
          reducers,
          {},
          applyMiddleware(ReduxThunk)
        )}
      >
        <NativeRouter>
          <Route path="/" component={Main} />
        </NativeRouter>
      </Provider>
    );
  }
}
