import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils';

class EventsMap extends Component {
  // TODO set defaults based on member city
  state = {
    latitude: 33.67,
    longitude: -111.924,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsMap);
