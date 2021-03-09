import * as React from 'react';
import { View, Text, Button, ImageBackground, TextInput, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

export interface SignUpProps {
}

export default function SignUp (props: SignUpProps) {
    return (<ImageBackground source = {require('./../../assets/background.jpeg')} 
    style={styles.background}>

<Avatar size="xlarge"
    rounded
    title="FE"
    containerStyle={{backgroundColor:'grey'}}
    onPress={() => console.log("Adcionar Foto")}
    activeOpacity={0.5}/>
<View>

</View>

<View style={styles.conteiner}>
<Text>Usuário</Text>
<Text>Email:</Text>
<Text>Senha:</Text>

<View style={styles.conteinerInput}>
<TextInput placeholder="Digite seu usuário"/>
<TextInput placeholder="Digite seu e-mail"/>
<TextInput placeholder="Digite sua senha"/>
</View>

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