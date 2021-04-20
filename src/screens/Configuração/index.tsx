import * as React from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/core';
import { List } from '../../components/list';

export interface SettingScreenProps {}

export default function SettingScreen (props: SettingScreenProps) {

  const nav = useNavigation()


  return (
      <ImageBackground source={require('./../../assets/fundo3.jpg')} style={{width:'100%',height:'100%'}}>

     <View>

     <Image source={require('./../../assets/logo1.png')}
      style={{flex:1, padding:130,margin:7}}/>


    <List/>
    
     <Button style={styles.button} title="Sair" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Entrar')}}/>
     
    </View>

      </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'center', margin:30},
  button:{paddingTop: 20, margin:20}
  
});

