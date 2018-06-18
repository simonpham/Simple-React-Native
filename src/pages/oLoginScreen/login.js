import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginForm'

export default class login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
       <View style={styles.logoContainer}>
       <Image
          style={styles.logo}
          source={require('./hasBrain.png')}/>

          <Text style={styles.formContainer}>An App for fun</Text>
          </View>
          <View style = {styles.formContainer}>
            <LoginForm />
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  logo:{
    width: 160,
    height: 160
  },
  title:{
    color: '#FFF',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity:0.9

  }
});
