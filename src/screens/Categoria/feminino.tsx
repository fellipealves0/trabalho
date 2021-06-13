import * as React from 'react';
import { ActivityIndicator, Linking, TouchableOpacity } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Toolbar } from '../../components/toolbar';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { useNetInfo } from '@react-native-community/netinfo';
import firebase from 'firebase';


export interface FemininoScreenProps {
}

export function FemininoScreen (props: FemininoScreenProps) {
  return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>
        

  <Toolbar titulo="Feminino" menu={true}/>
  </ImageBackground>
  
  );
  }