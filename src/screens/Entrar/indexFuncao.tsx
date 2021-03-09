import * as React from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';

export interface LoginScreensProps {
}

export default function LoginScreens (props: LoginScreensProps) {
    return (
                <ImageBackground source = {require('./../../assets/background.jpeg')} 
                 style={styles.background}>
   <View>

<Image source= {require('./../../assets/Logo.png')}
style={{justifyContent:'center',alignItems:"center",padding:150, flex:1,}} /> 

<Input style={{fontSize:20}} inputStyle={{color:'white'}} placeholder="Digite seu email" lefIcon={{name:'perm_identity',color:'white'}} placeholderTextColor='white' InputStyle={{color:'white'}}/>
<Input style={{fontSize:20}} inputStyle={{color:'white'}} placeholder="Digite sua senha" lefIcon={{name:'lock',color:'white'}} secureTextEntry placeholderTextColor='white' InputStyle={{color:'white'}}/>

<Button>

<Button style={{paddingTop: 50, left:62, width:236, }}
title= "Entrar"
onPress={function() {console.log('teste')}} />

<Button style={{paddingTop: 50, left:62, width:236, }}
title= "Cadastrar"
onPress={function() {console.log('teste')}} />

</Button>


    </View>

</ImageBackground>
);
}

const styles= StyleSheet.create({
  background:{width:'100%', height:'100%'},
  conteiner:{flex:1, padding:10, flexDirection:'column', justifyContent:'center', alignItems:'stretch', color:'black', fontSize:50},
  conteinerInput:{color:'white', fontSize:50,flex:1,textAlign:'center'},
  logo:{}
});