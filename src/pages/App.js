import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from './LoginScreen.js'
import { OLoginScreen } from './OLoginScreen.js'
import { ShowImageScreen } from './ShowImageScreen.js'
import { ProfileScreen } from './ProfileScreen.js'

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={ styles.buttonContainer }>
        <TouchableHighlight
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('Login', {title: 'Login screen'}) }
          underlayColor='#000' >
            <Text style={ styles.buttonText }>[1st day] Simon login screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('OLogin', {title: 'Login screen'}) }
          underlayColor='#000' >
            <Text style={ styles.buttonText }>[2nd day] Oanh Login screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('ShowImage', {title: 'Show image screen'}) }
          underlayColor='#000' >
            <Text style={ styles.buttonText }>[2nd day] Duy Show Image screen</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={ styles.button }
          onPress={ () => this.props.navigation.navigate('Profile', {title: 'Profile screen'}) }
          underlayColor='#000' >
            <Text style={ styles.buttonText }>[2nd day] Thang Profile screen</Text>
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
    OLogin: OLoginScreen,
    ShowImage: ShowImageScreen,
    Profile: ProfileScreen,
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
