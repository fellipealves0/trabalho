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
import SearchBar from '../../components/SearchBar';
import { ListCategoria } from '../../components/listCategoria';

export interface CategoriarScreenProps {
}

export function CategoriarScreen (props: CategoriarScreenProps) {
    const nav = useNavigation()
  
    return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

<View>

<SearchBar/>
<ListCategoria/>
</View>

 </ImageBackground>
);
}




const styles = StyleSheet.create({
  container:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'left', margin:30},
  button:{margin:10},
  image:{margin: 5, width: 150, height: 150 }
});


