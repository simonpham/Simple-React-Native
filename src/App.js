import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from './components/LoginScreen.js'

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={ styles.buttonContainer }>
        <TouchableHighlight
          ref={(btnLogin) => { this.btnLogin = btnLogin; }}
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('Login', {title: 'Login screen'}) }
          underlayColor='#000' >
            <Text style={ styles.buttonText }>Go to Login screen</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff5722',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
      backgroundColor:'#000000',
      opacity: .5,
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
  },
  editText: {
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 10,
    color: "#ffffff"
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#ff5722',
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#00000000'
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
  }
})
