import * as React from 'react';
import { ActivityIndicator, Linking, ScrollView, TouchableOpacity } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Toolbar } from '../../components/toolbar';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import { useNetInfo } from '@react-native-community/netinfo';
import firebase from 'firebase';



export interface UnissexScreenProps {
}

export function UnissexScreen (props: UnissexScreenProps) {

  const nav = useNavigation()

  return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

<ScrollView>      

 <Toolbar titulo="Unissex" menu={true}/>


<View>
<Image style={styles.image} source={require('./../../assets/foto5.jpg' )} PlaceholderContent={<ActivityIndicator />}/>
      <Text style={styles.nomeproduto}> Relógio De Pulso Ás de Paus</Text>
      <Text style={styles.precode}> De R$ 1350,00 </Text>
      <Text style={styles.nomeproduto}> Por R$ 350,00 </Text>
      <Button style={styles.button} title ="Comprar" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Unis')}}/>
</View>



</ScrollView>

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
  