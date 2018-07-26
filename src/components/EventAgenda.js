import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EventImage from './EventImage';

export default class EventAgenda extends Component {
  render() {
    const { event } = this.props;

    return (
      <View style={styles.container}>
        <EventImage event={event} />
        <Text style={styles.title}>{event.title}</Text>
      </View>
    );
  }
}

const styles = {
  container: { flexDirection: 'row' },
  title: {
    marginLeft: 10,
    fontSize: 16,
    width: 200
  }
};
