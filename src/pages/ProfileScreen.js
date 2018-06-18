import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { Header } from 'react-native-elements'

export class ProfileScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isEdittable : false}
    }
    _onAvtButtonPressed() {

    }
    _onExitButtonPressed() {

    }
    _onSaveButtonPressed() {

    }
    render() {
        return (
            <View>
                <Header
                    centerComponent = {{
                      text : 'PROFILE',
                      style : {color : '#fff', fontSize : 15, fontWeight : 'bold'}
                    }}
                />
                <View style = {styles.avtcontainer}>
                    <Image source = {require('./profileScreen/default-avt.png')} style = {styles.img}/>
                    <Button title = 'Change' onPress = {this._onAvtButtonPressed}/>
                </View>
                <Info name = 'Name'/>
                <Info name = 'Email'/>
                <Info name = 'Phone'/>
                <View style = {styles.buttoncontainer}>
                    <View style = {{
                        alignItems : 'stretch',
                        flexDirection: 'column',
                        flex : 1,
                        padding : 5}}>
                        <Button title = 'Exit' onPress = {this._onExitButtonPressed}/>
                    </View>
                    <View style = {{
                        alignItems : 'stretch',
                        flexDirection: 'column',
                        flex : 1,
                        padding : 5}}>
                        <Button title = 'Save' onPress = {this._onSaveButtonPressed}/>
                    </View>
                </View>
            </View>
        )
    }
}

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : ''
        }
    }
    render() {
        return (
            <View style = {styles.infocontainer}>
                <Text style ={{fontSize : 15, flex : 1}}> {this.props.name} </Text>
                <View style = {{flex : 4, padding : 5, borderColor : '#000000', borderWidth : 1}}>
                    <TextInput
                        style = {{fontSize : 15}}
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(text) => this.setState({text})}
                        value = {this.state.text}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        avtcontainer: {
            justifyContent: 'center',
            alignItems: 'center',
            padding : 10
        },
        infocontainer: {
            flexDirection : 'row',
            alignItems : 'center',
            padding : 5
        },
        buttoncontainer: {
            flexDirection: 'row',
            justifyContent : 'center'
        },
        img: {
            width: 120,
            height: 120,
            margin : 10
        }
    }
)
