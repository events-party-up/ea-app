import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppFontLoader, GA } from './src/utils';
import { NativeRouter, Route } from 'react-router-native';
import { ScreenHit } from 'expo-analytics';

import Main from './src/containers/Main';
import reducers from './src/reducers';

export default class App extends React.Component {
  componentDidMount() {
    GA.hit(new ScreenHit('EA-Main'));
  }

  render() {
    return (
      <AppFontLoader>
        <Provider
          store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
        >
          <NativeRouter>
            <Route component={Main} />
          </NativeRouter>
        </Provider>
      </AppFontLoader>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
