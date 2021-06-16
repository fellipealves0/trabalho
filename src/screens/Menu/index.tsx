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
import { AdMobBanner } from 'expo-ads-admob';



export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {

  const nav = useNavigation()
  
    return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>
< ScrollView>

<View>

<Image source={require('./../../assets/logo1.png')}
style={{padding:130,margin:7}}/>

    <TouchableOpacity onPress={() => {nav.navigate('Categoria')}}>
           <Text style={styles.titulo}>Categorias</Text>
    </TouchableOpacity>

      <Image style={styles.image} source={require('./../../assets/foto1.jpg' )} PlaceholderContent={<ActivityIndicator />}/>
      <Text style={styles.nomeproduto}> Relógio Clássico</Text>
      <Text style={styles.precode}> De R$ 1350,00 </Text>
      <Text style={styles.nomeproduto}> Por R$ 350,00 </Text>
      <Button style={styles.button} title ="Comprar" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Masculino')}}/>


      <Image style={styles.image} source={require('./../../assets/foto3.jpg' )} PlaceholderContent={<ActivityIndicator />}/>
      <Text style={styles.nomeproduto}> Relógio De Pulso Amor é Sol Arco Ires</Text>
      <Text style={styles.precode}> De R$ 1350,00 </Text>
      <Text style={styles.nomeproduto}> Por R$ 450,00 </Text>
      <Button style={styles.button} title ="Comprar" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Feminino')}}/>

      <TouchableOpacity onPress={() => {nav.navigate('Categoria')}}>
           <Text style={styles.titulo}>Lançamentos</Text>
    </TouchableOpacity>

      <Image style={styles.image} source={require('./../../assets/foto2.jpg' )} PlaceholderContent={<ActivityIndicator />}/>
      <Text style={styles.nomeproduto}> Relógio Clássico</Text>
      <Text style={styles.precode}> De R$ 1350,00 </Text>
      <Text style={styles.nomeproduto}> Por R$ 250,00 </Text>
      <Button style={styles.button} title ="Comprar" buttonStyle={{borderRadius:30}} onPress={() => {nav.navigate('Unissex')}}/>

      
    <AdMobBanner

adUnitID= "ca-app-pub-4975312222370138/1796296541"
bannerSize="fullBanner"

/>

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


