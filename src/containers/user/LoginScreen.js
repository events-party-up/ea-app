import React, { Component } from 'react'
import { ImageBackground, TouchableOpacity, Text, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils';

const BACKGROUND_IMG = require('../../../assets/login_background.png');

export class LoginScreen extends Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <ImageBackground
                resizeMode="contain"
                source={BACKGROUND_IMG}
                style={styles.backgroundImage}
            >
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="email address"
                        keyboardType="email-address"
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="password"
                        secureTextEntry
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password} />
                    <TouchableOpacity>
                        <Text style={styles.loginButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = {
    backgroundImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: 250,
    },
    loginButton: {
        textAlign: 'center',
        width: 250,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: 'lightblue'
    }
}
const mapStateToProps = state => state;

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
