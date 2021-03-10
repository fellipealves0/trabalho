import * as React from 'react';
import {ImageBackground, StyleSheet,Button, TextInput,Text,TouchableOpacity, View, LogBox, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    return (
      <ImageBackground source={require('./../../assets/Background.jpeg')}
                                   style={styles.background}>

    <View style={styles.container}>
      
     </View>
     <Image source={require('./../../assets/Logo.png')}></Image>
  </ImageBackground>
);
}
const styles = StyleSheet.create({
    background: {width:'100%',height:'100%'},
    container: {
        flex:1,
        padding:10,
        flexDirection:'column',
        justiftyContent:'center',
        alignItens: 'center',
    },
    logo:{color:'white', fontSize:50,textAlign:'center',}
});