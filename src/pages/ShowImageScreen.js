import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button, WebView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class FirstScreen extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {text: 'Type the image URL'};
  //}
  state = {text: ''};

  static navigationOptions =
  {
	  title: 'Image',
  };

  render() {
    return (
      <View style={{padding: 10}}>
         <TextInput
          style={{height: 40}}
          placeholder="Type here"
          onChangeText={text => this.setState({text})}
        />
		<Button onPress={() => this.props.navigation.navigate('Second',  { text: this.state.text} )} title = 'SUBMIT'/>
      </View>
    );
  }
}

class SecondScreen extends React.Component {

	static navigationOptions =
	{
		title: 'Display Image',
	};

	render()
	{

		//const urll = this.props.navigation.state.params.text
		return(
		 <WebView
        source={{uri: this.props.navigation.state.params.text}}
        style={{marginTop: 20}}
         />

		//<View style = {styles.container}>
			//<Image source={{uri: "http://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
		//</View>
		);
	}
}

export class ShowImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Image',
  };
  render() {
    return <Hi />;
  }
}

const Hi = createStackNavigator(
  {
  	First: FirstScreen,
  	Second: SecondScreen,
  },
  {
    initialRouteName: 'First',
    navigationOptions: {
       header: <Text style={{display:"none"}} ></Text>
    },
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
