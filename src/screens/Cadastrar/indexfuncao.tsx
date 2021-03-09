import * as React from 'react';
import {ImageBackground, StyleSheet,Button, TextInput,Image, Text,TouchableOpacity, View} from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';

export interface SignUpScreenProps {
}

export default function SignUpScreen (props: SignUpScreenProps) {
    return (
      <ImageBackground source={require('./../../assets/Background.jpeg')}
                                 style={style.background}>

    <View style={style.container}>
    <Text style={style.logo}>APP</Text>
    <Avatar 
       size="xlarge"
       rounded
       title="CR"
       containerStyle={{backgroundColor:'grey'}}
       onPress={() => console.log("Adcionar Foto")}
       activeOpacity={0.5}/>
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