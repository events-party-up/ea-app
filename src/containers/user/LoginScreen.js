import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text> Login Screen </Text>
            </View>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
