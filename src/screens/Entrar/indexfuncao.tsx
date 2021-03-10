import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,TouchableOpacity, View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { Button, Input, SocialIcon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


export interface LoginScreenProps {}

export default function LoginScreen (props: LoginScreenProps) {

    const [email, setEmail] = React.useState('test@test.com.br');
    const [senha, setSenha] = React.useState('12345');


    const SignIn = () => {
        if (email.trim() !== '' && senha.trim() !== '') 
            console.log('Logado com sucesso');
        else {
            // alerta de email ou senha errado
            alert('E-mail e/ou senha não correspondem!');
          }; 

    return (
      <ImageBackground source={require('./../../assets/fundo2.jpg')}
                                   style={{width:'100%',height:'100%'}}>
    <View>
    <Image source={require('./../../assets/logo1.png')}
     style={{flex:1, padding:150,margin:7}}/>

    <View style={styles.container}> 
         <Input placeholder='Digite seu email' 
             leftIcon={
             <Icon
             name='user'
             size={20}
             color='black'
             />}
             value={email}
             onChangeText={setEmail}/>

        <Input placeholder='Digite sua senha' 
             leftIcon={
             <Icon
             name='lock'
             size={20}
             color='black'
             /> }
             secureTextEntry={true}
             value={senha}
             onChangeText={setSenha}/>

        </View>

     <View>
     <Button style={styles.button}
      title="Entrar"
      buttonStyle={{borderRadius:30}}
      onPress={() => console.log('Cadastrar')}/>
      </View>
    
    <Text style={styles.cadastro}>Não possui cadastro? {'\n'} Clique aqui para se cadastrar</Text>

   <View style={styles.iconSocial}>
        <SocialIcon
        type='instagram'
        onPress={() => console.log('uri:')}/>
        
        <SocialIcon
        type='facebook'
        onPress={() => console.log('test')}/>

        <SocialIcon
        type='google'
        onPress={() => console.log('test')}/>
        
         </View>

    </View>
      
  </ImageBackground>
);
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justiftyContent:'center',
        alignItens: 'center',
    },
    logo:{color:'white', fontSize:50,textAlign:'center',},
    iconSocial:{flexDirection:'row', alignItems: 'center', justifyContent: 'center'},
    button:{margin:10},
    cadastro:{color:'black',fontSize:15,textDecorationLine: 'none', textAlign:'center', margin:11,},
});