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
import { Toolbar } from '../../components/toolbar';

export interface NotificacoesScreenProps {
}

export function NotificacoesScreen (props: NotificacoesScreenProps) {
  const nav = useNavigation()
  
  return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

<View>

{<Icon style={styles.icon} name='bell'size={50} color='black'/>}
<Text style={styles.container} > SEM NOTIFICAÇÕES NO MOMENTO </Text>



</View>

</ImageBackground>
);
}

const styles = StyleSheet.create({
  container:{color:'black',fontSize:28,textDecorationLine: 'none', textAlign:'center', padding:0},
  button:{margin:10},
  image:{margin: 5, width: 150, height: 150 },
  icon:{textAlign:'center', paddingTop:80, marginTop:210},
  voltar:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'center', margin:50}


});

