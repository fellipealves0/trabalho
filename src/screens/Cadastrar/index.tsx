// @ts-nocheck
import * as React from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/core';


export interface SignupScreenProps {}

export default function SignupScreen (props: SignupScreenProps) {
  
  const nav = useNavigation()
  const [erro , setErro] = React.useState ('')
 
  const cadastrar = ({nome, email,senha}: any) =>{ 
    console.log('nome',nome);
    console.log('email',email);
    console.log('senha',senha);

    if (nome== 'Fellipe' && email == 'fellipe@gmail.com' && senha == '123456')
        nav.navigate('Menu')
  else
  console.log('Email já cadastrado');

}

return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

<Formik
  initialValues={{nome:'', email:'', senha:''}}
  validationSchema={Yup.object().shape({
    nome:Yup.string().required('Nome obrigatorio'),
    email:Yup.string().email ('Precisa ser um Email').required('Email obrigatorio'),
    senha:Yup.string().min (6,'Pelo menos 6 caracteres').required('Senha obrigatorio'),
  })}
  onSubmit={cadastrar}

>
{({handleChange, errors, handleSubmit}) => (
  <View>
  <Image source={require('./../../assets/logo1.png')}
   style={{flex:1, padding:130,margin:7}}/>

  <View style={styles.container}> 
       <Input placeholder='Digite seu nome' leftIcon={<Icon name='user-plus'size={20} color='black'/>} onChangeText={handleChange('nome')}/>
       <Text style={styles.erro}>{errors.nome}</Text>

       <Input placeholder='Digite seu email' leftIcon={<Icon name='user'size={20} color='black'/>} onChangeText={handleChange('email')}/>
       <Text style={styles.erro}>{errors.email}</Text>

       <Input placeholder='Digite sua senha' leftIcon={<Icon name='lock'size={20} color='black'/> } secureTextEntry={true} onChangeText={handleChange('senha')}/>
       <Text style={styles.erro}>{errors.senha}</Text>
  </View>
   
   <Button style={styles.button} title="Cadastrar" buttonStyle={{borderRadius:30}} onPress={() =>handleSubmit()}/>
  
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
  container: {flexDirection:'column',justifyContent:'center',alignItems: 'center'},
  erro:{textAlign:'left', marginLeft:190},
  logo:{color:'white', fontSize:50,textAlign:'center'},
  iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
  button:{margin:10},
});