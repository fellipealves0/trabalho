import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,TouchableOpacity, View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


export interface HomeScreenProps {}

export default function HomeScreen (props: HomeScreenProps) {
    return (
      <ImageBackground source={require('./../../assets/fundo2.jpg')}
                                   style={{width:'100%',height:'100%'}}>
    <View>
    <Image source={require('./../../assets/logo1.png')}
     style={{flex:1, padding:150,margin:7}}/>

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
    logo:{color:'white', fontSize:50,textAlign:'center',},
    button:{margin:10},
    cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11,}

});