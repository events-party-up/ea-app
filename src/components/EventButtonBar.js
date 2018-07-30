import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, Redirect, Route, matchPath } from 'react-router-native';
import { connect } from 'react-redux';
import { COLORS, SCREEN_WIDTH } from '../utils';

class EventButtonBar extends Component {
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
        return (
            <View style={styles.buttonContainer}>
                <Link
                    to="/events/map"
                    replace
                    component={TouchableOpacity}
                >
                    <Text style={[styles.buttonText, mapButtonStyle]}>Map</Text>
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

        )
    }
}


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH,
    },
    grayHeaderLine: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: 2,
        bottom: 5,
        borderBottomWidth: 1,
        borderColor: COLORS.darkGray
    },
    buttonText: {
        marginLeft: 50,
        marginRight: 50,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 10,
        paddingBottom: 10,
        marginBottom: 0
    },
});


export default connect()(EventButtonBar);