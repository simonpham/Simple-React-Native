import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'http://facebook.github.io/react-native/img/favicon.png'};
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
        <Button onPress={ this.OpenSecondActivityFunction } title = 'Click me'/>
          
      
        <Text>We are just getting started</Text>
      </View>
    );
  }
}

class second extends Component
{
	static navigationOptions = 
	{
		title: 'Display Image',
	};
	
	render()
	{
		return(
		<View style = {styles.container}>
			<Image source={{uri: "http://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
		</View>
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