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


export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {

  const nav = useNavigation()
    return (
      <View>
         <Text>HomeScreen</Text>
         <View>
         <Button style={styles.button} title="Voltar" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Entrar')}}/>
    </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {flexDirection:'column',justiftyContent:'center',alignItens: 'center'},
  logo:{color:'white', fontSize:50,textAlign:'center'},
  iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
  button:{margin:10},
  cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11}
});


