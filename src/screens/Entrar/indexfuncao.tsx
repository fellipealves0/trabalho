import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import {ImageBackground, StyleSheet,Button, TextInput,Text,TouchableOpacity, View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { SocialIcon } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { createStackNavigator } from '@react-navigation/stack';


export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    return (
      <ImageBackground source={require('./../../assets/fundo2.jpg')}
                                   style={{width:'100%',height:'100%'}}>
    <View>
    <Image source={require('./../../assets/logo1.png')}
     style={{flex:1, padding:150,margin:7}}/>

    <SocialIcon    
     type='instagram'

     
     />
     <SocialIcon    
     type='facebook'
     />  

        <Button
        title="Go to Details"
        onPress={() => navigator.navigate('Cadastrar')}
      />
         
         
     

    </View>
      
     <View style={styles.container}>


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
    logo:{color:'white', fontSize:50,textAlign:'center',}
});