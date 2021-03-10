import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import {ImageBackground, StyleSheet,Button, TextInput,Text,TouchableOpacity, View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import {useNavigation} from '@react-navigation/native';



export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    return (
      <ImageBackground source={require('./../../assets/Background.jpeg')}
                                   style={{width:'100%',height:'100%'}}>
    <View>
    <Image source={require('./../../assets/logo1.png')}
     style={{left:30, width:286, flex:1, padding:150,}}/>
    </View>
    

     <View style={styles.container}>
         
     </View>

     

  </ImageBackground>
);
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justiftyContent:'center',
        alignItens: 'center',
    },
    logo:{color:'white', fontSize:50,textAlign:'center',}
});