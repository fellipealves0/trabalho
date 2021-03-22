import * as React from 'react';
import { ActivityIndicator, Linking, TouchableOpacity } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/core';

export interface BuscarScreenProps {}

export default function BuscarScreen (props: BuscarScreenProps) {

    const nav = useNavigation()


    return (
        <ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {flexDirection:'column',justifyContent:'center',alignItens: 'center'},
    logo:{color:'white', fontSize:50,textAlign:'center'},
    iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
    button:{margin:10},
    cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11}
  });
  
  