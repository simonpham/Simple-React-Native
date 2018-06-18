import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Header } from 'react-native-elements'

export default class ProfileScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isEdittable : false}
    }
    _onAvtButtonPressed() {
       
    }
    _onEditButtonPressed() {
        this.setState({isEdittable:true})
    }
    _onSaveButtonPressed() {
        this.setState({isEdittable:false})
    }
    render() {
        return (
            <View>
                <Header
                    centerComponent = {{
                      text : 'PROFILE', 
                      style : {color : '#fff', fontSize : 20, fontWeight : 'bold'}
                    }}
                />
                <View style = {styles.avtcontainer}>
                    <Image source = {require('./default-avt.png')} style = {styles.img}/>
                    <Button title = 'Change' onPress = {this._onAvtButtonPressed}/>
                </View>
                <Info name = 'Name'/>
                <Info name = 'Email'/>
                <Info name = 'Phone'/>
                <View style = {styles.buttoncontainer}>
                    <Button style = {{margin : 15, flex : 1}} title = 'Edit' onPress = {this._onEditButtonPressed.bind(this)}/>
                    <Button style = {{margin : 15, flex : 1}} title = 'Save' onPress = {this._onSaveButtonPressed.bind(this)}/>
                </View>
            </View>
        )
    }
}

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text : ''}
    }
    render() {
        return (
            <View style = {styles.infocontainer}>
                <Text style ={{fontSize : 15}}> {this.props.name} </Text>
                <View style = {{padding : 10, borderColor : '#000000', borderWidth : 1}}>
                    <TextInput
                        style = {{fontSize : 15}}
                        editable = {this.state.isEdittable}
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
            flexDirection : 'column',
            padding : 5
        },
        buttoncontainer: {
            justifyContent: 'space-around',
            flexDirection: 'row',
            padding : 20
        },
        img: {
            width: 120,
            height: 120,
            margin : 10
        }
    }
)