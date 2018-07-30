import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BackButton, Link, Redirect, Route, matchPath } from 'react-router-native';
import { connect } from 'react-redux';

import AnimatedSwitch from '../utils/AnimatedSwitch';
import LoginScreen from './user/LoginScreen';
import EventsMap from './events/EventsMap';
import EventsScreen from './events/EventsScreen';
import { COLORS, SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils';

class Main extends Component {
  setStyleIfPath(path) {
    if (
      matchPath(this.props.location.pathname, {
        path
      })
    ) {
      return { borderBottomWidth: 5, borderColor: 'blue' };
    }
    return {};
  }

  render() {
    const mapButtonStyle = this.setStyleIfPath('/events/map');
    const calendarButtonStyle = this.setStyleIfPath('/events/calendar');
    // TODO fix login screen
    const loggedIn = this.props.user.loggedIn ? <Redirect to="/login" /> : null;

    return (
      <View style={styles.container}>
        {loggedIn}
        <BackButton />

        <View style={styles.buttonContainer}>
          <Link
            to="/events/map"
            replace
            component={TouchableOpacity}
          >
            <Text style={[styles.buttonText, mapButtonStyle]}>
              Map
            </Text>
          </Link>
          <Link
            to="/events/calendar"
            replace
            component={TouchableOpacity}
          >
            <Text style={[styles.buttonText, calendarButtonStyle]}>Calendar</Text>
          </Link>
          <View style={styles.grayHeaderLine} />
        </View>

        <AnimatedSwitch {...this.props} exact>
          <Route path="/events/map" component={EventsMap} />
          <Route path="/events/calendar" component={EventsScreen} />
          <Route path="/login" component={LoginScreen} />
          <Redirect to="/events/calendar" />
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    height: 50,
    position: 'absolute',
    left: 0,
    top: 0
  }, grayHeaderLine: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: 2,
    bottom: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.darkGray
  },
  buttonText: {
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
    paddingBottom: 10,
    marginBottom: 0
  },
});

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
