
import * as React from 'react';
import { ActivityIndicator, Linking, TouchableOpacity } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/core';
import * as Yup from 'yup'




export interface LoginScreenProps {}

export default function LoginScreen (props: LoginScreenProps) {
 
    const nav = useNavigation()
    const [erro , setErro] = React.useState ('')
   

    const logar = async ({email,senha}: any) =>{ 
      console.log('Email',email);
      console.log('Senha',senha);
      if (email == 'fellipe@gmail.com' && senha == '123456')
            nav.navigate('Menu')
    else
    console.log ('Email e senha incorreto');
  }

  return (<ImageBackground source={require('./../../assets/fundo2.jpg')} style={{width:'100%',height:'100%'}}>

<Formik
    initialValues={{email:'', senha:''}}
    validationSchema={Yup.object().shape({
      email:Yup.string().required('Email obrigatorio').email ('Precisa ser um Email'),
      senha:Yup.string().required('Senha obrigatorio').min (6,'Pelo menos 6 caracteres'),
    })}

    onSubmit={logar}> 

  {({handleChange, errors, handleSubmit}) => (

    <View>
    <Image source={require('./../../assets/logo1.png')}
     style={{flex:1, padding:130,margin:7}}/>

    <View style={styles.container}> 
           <Input placeholder='Digite seu email' leftIcon={<Icon name='user'size={20} color='black'/>} onChangeText={handleChange('email')}/>
           <Text style={styles.erro}>{errors.email}</Text>

           <Input placeholder='Digite sua senha' leftIcon={<Icon name='lock'size={20} color='black'/> } secureTextEntry={true} onChangeText={handleChange('senha')}/>
           <Text style={styles.erro}>{errors.senha}</Text>
    </View>

    <Button style={styles.button} title="Entrar" buttonStyle={{borderRadius:30}}  onPress={() =>handleSubmit()}/>

    <TouchableOpacity onPress={() => {nav.navigate('Cadastrar')}}>
           <Text style={styles.cadastro}>Não possui cadastro? {'\n'} Clique aqui para se cadastrar</Text>
    </TouchableOpacity>
      
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
    logo:{color:'white', fontSize:50, textAlign:'center'},
    iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
    button:{margin:10},
    cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11}
});