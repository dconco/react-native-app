import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet
} from 'react-native-web'
import Icon from './assets/icon.jpg'

export default class App extends Component {
  render() { 
    return (
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>Welcome to react-native Hello world!</Text>
        <br/>
        <TopImage>Hello</TopImage>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'green'
  },
  textStyle: {
    fontSize: 15,
    color: 'white'
  }
})