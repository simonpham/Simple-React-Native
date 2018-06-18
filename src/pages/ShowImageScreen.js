import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert, TextInput } from 'react-native';

export class ShowImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = { imageUrl: 'https://www.wallpaperflare.com/static/550/819/826/glare-background-blur-dark-wallpaper.jpg', text: ''};
  }

  _onLoadPressed() {
    this.setState({ imageUrl: this.state.text })
  };

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
        source={ {uri: this.state.imageUrl} }
      >
        <View style={styles.overlay}></View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TextInput
              style={styles.editText}
              placeholderTextColor={'#ffffff'}
              underlineColorAndroid={'#ff5722'}
              returnKeyType={'next'}
              placeholder="Enter image url"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={styles.button}
              onPress={this._onLoadPressed.bind(this)}
              underlayColor='#000' >
                <Text style={[styles.buttonText]}>Load image</Text>
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
