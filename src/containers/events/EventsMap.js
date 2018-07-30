import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import { BackButton, Route } from 'react-router-native';

import { colorForDate, SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils';
import EventButtonBar from '../../components/EventButtonBar';

class EventsMap extends Component {
  // TODO set defaults based on member city
  state = {
    latitude: 33.67,
    longitude: -111.924,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5
  };

  componentDidMount() {
    // TODO find geolocation here and set state
  }

  render() {
    const markers = this.props.events.eventList.map(event => {
      const eventDate = new Date(event.date);

      return (
        <Marker
          key={event.id}
          coordinate={event.location}
          title={event.title}
          pinColor={colorForDate(eventDate)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <BackButton />
        <Route component={EventButtonBar} />
        <MapView style={styles.map} region={this.state}>
          {markers}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  map: {
    width: SCREEN_WIDTH,
    height: 300,
    flex: 1
  }
});

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsMap);
