import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Redirect, Route } from 'react-router-native';
import { connect } from 'react-redux';

import AnimatedSwitch, { ANIMATE_FADE } from '../utils/AnimatedSwitch';
import LoginScreen from './user/LoginScreen';
import EventsMap from './events/EventsMap';
import EventsScreen from './events/EventsScreen';
import { COLORS, SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils';

class Main extends Component {
  render() {
    // TODO fix login screen
    const loggedIn = this.props.user.loggedIn ? <Redirect to="/login" /> : null;

    return (
      <View style={styles.container}>
        {loggedIn}

        <AnimatedSwitch {...this.props} animationType={ANIMATE_FADE} exact>
          <Route path="/events/map" component={EventsMap} />
          <Route path="/events/calendar" component={EventsScreen} />
          <Route path="/login" component={LoginScreen} />
          <Redirect to="/events/map" />
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
    justifyContent: 'center',
  },
});

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
