import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { stylesLogin } from '../styles/style'

const Login = () => {
  return (
    <View style = {stylesLogin.container}>
      <TextInput
          style={stylesLogin.input}
          placeholder="Enter Name"
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Name"
        />

        <Button title='Submit'/>
    </View>
  )
}

export default Login