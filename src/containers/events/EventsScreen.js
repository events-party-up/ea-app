import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class EventsScreen extends Component {

    render() {
        return (
            <View>
                <Text> Events Screen </Text>
            </View>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
