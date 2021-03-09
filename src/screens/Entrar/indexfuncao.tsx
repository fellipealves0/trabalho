import * as React from 'react';
import {ImageBackground, StyleSheet,Button, TextInput,Image, Text,TouchableOpacity, View} from 'react-native';

export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    return (
      <ImageBackground source={require('./../../../assets/background.png')}
      style={styles.background}>

    <View style={styles.container}>
    <Text style={styles.logo}>APP</Text>
    </View>

      </ImageBackground>
    );
}
const style = StyleSheet.create({
    background: {width:'100%',height:'100%'},
    container: {
        flex:1,
        padding:10,
        flexDirection:'column',
        justiftyContent:'center',
        alignItens: 'stretch',
    },
    logo:{color:'white', fontSize:50,textAlign:'center'}
});