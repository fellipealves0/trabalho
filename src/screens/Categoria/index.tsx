import * as React from 'react';
import { ActivityIndicator, Linking, TouchableOpacity } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
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
  
    return (<ImageBackground source={require('./../../assets/fundo3.jpg')} style={{width:'100%',height:'100%'}}>

<View>

<Toolbar titulo="CATEGORIAS" menu={true}/>

<SearchBar/>

<TouchableOpacity onPress={() => {nav.navigate('Categoria')}}>
           <Text style={styles.titulo}>Visto Recentemente</Text>
</TouchableOpacity>

    <Image style={styles.image1} source={require('./../../assets/foto2.jpg' )} PlaceholderContent={<ActivityIndicator />}/>
      <Text style={styles.nomeproduto}> Relógio Clássico</Text>
      <Text style={styles.precode}> De R$ 1350,00 </Text>
      <Text style={styles.nomeproduto}> Por R$ 350,00 </Text>
      <Button style={styles.button} title ="Comprar" buttonStyle={{borderRadius:30}}/>

</View>

 </ImageBackground>
);
}




const styles = StyleSheet.create({
  titulo:{color:'black',fontSize:20, fontWeight: "bold",textDecorationLine: 'none', marginBottom:20},
  container:{color:'black',fontSize:18,textDecorationLine: 'none', textAlign:'left', margin:30},
  nomeproduto:{fontSize:18,textAlign:'center'},
  precode:{fontSize:18,textAlign:'center', textDecorationLine: 'line-through' },
  precopor:{fontSize:18,textAlign:'center'},
  toolbar:{backgroundColor:'black'},
  container1:{flexDirection:'row', marginTop: 21},
  button:{margin:10},
  image1:{padding:150},
  image:{margin: 5, width: 150, height: 150, paddingVertical:80, padding:10}
 
});


