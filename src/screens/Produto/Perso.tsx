import * as React from 'react';
import { ActivityIndicator, Linking, TouchableOpacity, ScrollView } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/core';
import { Toolbar } from '../../components/toolbar';




export interface PersoProdutoProps {
}

export function PersoProduto (props: PersoProdutoProps) {

  const nav = useNavigation()
  
    return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>
< ScrollView>

<View>

<Image source={require('./../../assets/logo1.png')}
style={{padding:130,margin:7}}/>



    <TouchableOpacity onPress={() => {nav.navigate('Categoria')}}>
           <Text style={styles.titulo}> PULSEIRA LIFE STYLE</Text>
    </TouchableOpacity>

      <Image style={styles.image} source={require('./../../assets/foto4.jpg' )} PlaceholderContent={<ActivityIndicator />}/>
      <Text style={styles.precode}> De R$ 350,00 </Text>
      <Text style={styles.nomeproduto}> Por R$ 150,00 </Text>
      
      <Button style={styles.button} title ="Comprar" buttonStyle={{borderRadius:30}}/>

      <Text style={styles.titulo}>
        Pulseira muito Macia, leve, resistente, durável, não desbota e 100% silicone.{'\n'}
        Produto Brasileiro. {'\n'}
        Gênero Feminino e Masculino (unissex).{'\n'}
        Permitido Personalização (sem custo adicional).{'\n'} </Text>


</View>
</ScrollView>

 </ImageBackground>
);
}


const styles = StyleSheet.create({
  titulo:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'center', margin:50},
  nomeproduto:{fontSize:18,textAlign:'center'},
  precode:{fontSize:18,textAlign:'center', textDecorationLine: 'line-through' },
  precopor:{fontSize:18,textAlign:'center'},
  container2:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'left', margin:30},
  button:{margin:20},
  image:{padding:150}
});


