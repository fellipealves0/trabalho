import * as React from 'react';
import {ImageBackground, StyleSheet,Button, TextInput,Text,TouchableOpacity, View, LogBox} from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    return (
      <ImageBackground source={require('./../../assets/Background.jpeg')}
                                 style={{width:'100%', height:'100%'}}>

    <View style={style.container}>
        <Text style={style.logo}>APP</Text>
    </View>
    
        </ImageBackground>
);
}
const style = StyleSheet.create({
    background: {width:'100%',height:'100%'},
    container: {padding:30,justiftyContent:'center', alignItens: 'center', flex:1,
       
        
        flexDirection:'column',

       
    },
    logo:{color:'white', fontSize:50,textAlign:'center',}
});