import * as React from 'react';
import {ImageBackground, StyleSheet,Button, TextInput,Image, Text,TouchableOpacity, View} from 'react-native';

export interface LoginScreensProps {}

export interface LoginScreensState {}

export default class LoginScreens extends React.Component<LoginScreensProps, LoginScreensState> {
  constructor(props: LoginScreensProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (<ImageBackground source = {require('./../../assets/background.jpeg')} 
                                       style={styles.background}>
                                       
      <View>

    <Image source= {require('./../../assets/Logo.png')}
      style={{justifyContent:'center',alignItems:"center",padding:150, flex:1,}}
    ></Image> 

      </View>

    <View style={styles.conteiner}>
         <Text>Email:</Text>
         <Text>Senha:</Text>
      
   <View style={styles.conteinerInput}>
          <TextInput placeholder="Digite seu e-mail"/>
          <TextInput placeholder="Digite sua senha"/>
    </View>
    
    </View>

<Button title= "Entrar" onPress={function() {console.log('teste')}}/>

</ImageBackground>
);
}
}
const styles= StyleSheet.create({
  background:{width:'100%', height:'100%'},
  conteiner:{flex:1, padding:10, flexDirection:'column', justifyContent:'center', alignItems:'stretch', color:'black', fontSize:50},
  conteinerInput:{color:'white', fontSize:50,flex:1,textAlign:'center'},
  logo:{}
})