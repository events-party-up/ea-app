import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

export default class EventImage extends Component {
  render() {
    return (
      <Image
        source={{ uri: this.props.event.imageUrl, width: 100, height: 100 }}
      />
    );
  }
}

AppRegistry.registerComponent('EventImage', () => EventImage);
