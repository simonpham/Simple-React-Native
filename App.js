import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const bgImage = 'https://www.wallpaperflare.com/static/550/819/826/glare-background-blur-dark-wallpaper.jpg'

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Login screen"
          onPress={() => this.props.navigation.navigate('Login', {title: 'Login screen'})}
        />
      </View>
    );
  }
}

export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  _onLoginPressed() {
    Alert.alert(
      'Login failed!',
      'The password you entered is not match with the username ' + this.state.username + '\nPlease try again!!',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Try again', onPress: () => { this._onLoginPressed(); } },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <ImageBackground
        style={{
          backgroundColor: '#000',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={{ uri: bgImage }}
      >
        <View style={styles.overlay}></View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.editText}
              placeholderTextColor={'#ffffff'}
              underlineColorAndroid={'#ff5722'}
              returnKeyType={'next'}
              placeholder="User name"
              onChangeText={(username) => this.setState({username})}
              onSubmitEditing={() => { this.tiPassword.focus(); }}
            />
            <TextInput
              ref={(input) => { this.tiPassword = input; }}
              style={styles.editText}
              placeholderTextColor={'#ffffff'}
              underlineColorAndroid={'#ff5722'}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              ref={(btnLogin) => { this.btnLogin = btnLogin; }}
              style={styles.login}
              onPress={this._onLoginPressed.bind(this)}
              underlayColor='#000' >
                <Text style={[styles.loginText]}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    color: "#ffffff",
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  login:{
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#ff5722',
    borderRadius:25,
    borderWidth: 1,
    borderColor: '#00000000',
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
  },
});

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
  }
);
