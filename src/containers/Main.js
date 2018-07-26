import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Route } from 'react-router-native';
import { connect } from 'react-redux';

import AnimatedSwitch from '../utils/AnimatedSwitch';
import LoginScreen from './user/LoginScreen';
import EventsScreen from './events/EventsScreen';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils';

class Main extends Component {
  render() {
    const loggedIn = this.props.user.loggedIn ? <Redirect to="/login" /> : null;

    return (
      <View style={styles.container}>
        {loggedIn}
        <AnimatedSwitch {...this.props} exact>
          <Route path="/" component={EventsScreen} />
          <Route path="/login" component={LoginScreen} />
        </AnimatedSwitch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
