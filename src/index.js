import React, {Component} from 'react'

import {

    View,
    Text,
    TextInput,
    TouchableOpacity

} from 'react-native'

import style from './styles/mainStyles'

export default class App extends Component {

    render () {

        return (

            <View style = {style.container} >

                <View style = {style.header} >

                    <Text>Compras da Semana</Text>

                </View>

                <View style = {style.main} >

                    {/* aqui vai ter uma view generica para mensagens  */}

                </View>

                <View style = {style.viewTxtInput} >

                    <TextInput 
                        onChangeText = { () => {}}
                        style = {style.txtInput}
                        placeholder = "Digite sua mensagem"

                    />

                    <TouchableOpacity

                        style = {style.send}

                    >
                        


                    </TouchableOpacity>

                </View>


            </View>

        )

    }

}