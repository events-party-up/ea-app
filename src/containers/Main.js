import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Route } from 'react-router-native';

import AnimatedSwitch from '../utils/AnimatedSwitch';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedSwitch {...this.props} exact>
          <Route exact path="/" component={LoginScreen} />
          {/* <Route path="/vehicle" component={ServiceHome} />
          <Route path="/csl" component={CSLHome} />
          <Route path="/sap" component={SAPHome} />
          <Route path="/fitment" component={FitmentFlow} /> */}
        </AnimatedSwitch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
