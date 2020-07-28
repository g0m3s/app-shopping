import React, { Component } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import auth from '@react-native-firebase/auth';

export default class App extends Component {

    constructor (props) {

        super(props)
        this.state = {

            senha: '',
            email: '',
            autenticado: 'nonono'

        }

    }

    login = async () => {

        await auth()
        .signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            this.setState({ autenticado: 'sisisisi' })
        })
        .catch(error => {
            this.setState({ autenticado: 'kkkkkkk' })
        });

    }

    render () {
        
        return (

            <View>

                <TextInput
                    placeholder = "email"
                    onChangeText = { (email) => {this.setState({ email: email }) } }
                    value = {this.state.email}
                />
                <TextInput
                    placeholder = "senha"
                    onChangeText = { (senha) => {this.setState({ email: senha }) } }
                    value = {this.state.senha}
                />

                <TouchableOpacity

                    onPress = {this.login}

                >

                    <Text>login</Text>

                </TouchableOpacity>

                {/* <Text>{this.state.senha}</Text> */}
                <Text>{this.state.email}</Text>
                <Text>{this.state.autenticado}</Text> 

            </View>

        )

    }

}

