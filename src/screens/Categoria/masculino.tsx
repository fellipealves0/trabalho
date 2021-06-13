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
import { ProdutoScreen } from '../../components/produto';


export interface MasculinoScreenProps {
}

export function MasculinoScreen (props: MasculinoScreenProps) {
  return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>
        
 <Toolbar titulo="Masculino" menu={true}/>

<ProdutoScreen/>

</ImageBackground>
  
  );
  }

  const styles = StyleSheet.create({
    titulo:{color:'black',fontSize:20, fontWeight: "bold",textDecorationLine: 'none', marginBottom:20},
    nomeproduto:{fontSize:18,textAlign:'center'},
    precode:{fontSize:18,textAlign:'center', textDecorationLine: 'line-through' },
    precopor:{fontSize:18,textAlign:'center'},
    container2:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'left', margin:30},
    button:{margin:20},
    image:{padding:150}
  });
  