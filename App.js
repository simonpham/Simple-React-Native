import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Type the image URL'};
  }
}

class App extends Component {
	 
  static navigationOptions = 
  {
	  title: 'Image',
  };
  OpenSecondActivityFunction = () =>
  {
	  this.props.navigation.navigate('Second');
  }
  
  render() {
    return (
      <View style={styles.container}>
	  
        //<Button onPress={ this.OpenSecondActivityFunction } title = 'Click me'/>
         <TextInput
          style={{height: 40}}
          //placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text}) => this.props.navigation.navigate({text});
		  value = {this.state.text};
        />
      
        <Text>We are just getting started</Text>
      </View>
    );
  }
}

class second extends Component
{
	const urll = navigation.getParam({text});
	static navigationOptions = 
	{
		title: 'Display Image',
	};
	
	render()
	{
		return(
		 <WebView
        source={{uri: urll}}
        style={{marginTop: 20}}
         />

		//<View style = {styles.container}>
			//<Image source={{uri: "http://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
		//</View>
		);
	}
}

export default Hi = StackNavigator(
{
	First: { screen: App },
	Second: {screen: second }
});

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