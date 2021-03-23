import * as React from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/core';

export interface SettingScreenProps {}

export default function SettingScreen (props: SettingScreenProps) {

  const nav = useNavigation()


  return (
      <ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

     <View>
     <Button style={styles.button} title="Sair" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Entrar')}}/>
    </View>

      </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {flexDirection:'column',justifyContent:'center',alignItems: 'center'},
  logo:{color:'white', fontSize:50,textAlign:'center'},
  iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
  button:{margin:7},
  cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11}
});

