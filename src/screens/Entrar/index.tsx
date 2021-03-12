import * as React from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';

export interface LoginScreenProps {}

export default function LoginScreen (props: LoginScreenProps) {

 
    const logar = ({email,senha}: any) =>{ 
      console.log('email',email);
      console.log('senha',senha);
      if (email == 'fellipe@fellipe' && senha == '123456')
    console.log('Login aceito');
    else
    console.log('Email e senha incorreto');

  }

  return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

<Formik
    initialValues={{email:'', senha:''}}
    onSubmit={logar}

>
  {({handleChange, handleSubmit}) => (
    <View>
    <Image source={require('./../../assets/logo1.png')}
     style={{flex:1, padding:150,margin:7}}/>

    <View style={styles.container}> 
         <Input placeholder='Digite seu email' leftIcon={<Icon name='user'size={20} color='black'/>} onChangeText={handleChange('email')}/>
         <Input placeholder='Digite sua senha' leftIcon={<Icon name='lock'size={20} color='black'/> } secureTextEntry={true} onChangeText={handleChange('senha')}/>
    </View>

     <View>
     <Button style={styles.button} title="Entrar" buttonStyle={{borderRadius:30}} onPress={handleSubmit}/>
    </View>
    
      <Text style={styles.cadastro}>Não possui cadastro? {'\n'} Clique aqui para se cadastrar</Text>

   <View style={styles.iconSocial}>
      <SocialIcon type='instagram' onPress={async() => Linking.openURL('http://instagram.com')}/>
      <SocialIcon type='facebook' onPress={async() => Linking.openURL('https://pt-br.facebook.com/')}/>
      <SocialIcon type='google'onPress={async() => Linking.openURL('http://gmail.com')}/>
    </View>


</View>

)}

</Formik>
      
</ImageBackground>
);
}

const styles = StyleSheet.create({
    container: {flexDirection:'column',justiftyContent:'center',alignItens: 'center'},
    logo:{color:'white', fontSize:50,textAlign:'center'},
    iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
    button:{margin:10},
    cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11}
});