import * as React from 'react';
import {ImageBackground, StyleSheet,Button, TextInput,Image} from 'react-native';

export interface LoginScreensProps {}

export interface LoginScreensState {}

export default class LoginScreens extends React.Component<LoginScreensProps, LoginScreensState> {
  constructor(props: LoginScreensProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <ImageBackground source = {require('./../../assets/background.png')} 
                                 style={{width:'100%', height:'100%'}}>

        <view style={{padding:20}}>

        <Image source= {require('./../../assets/barber.svg')} style={{
            width:'60%',
            height:'60%', 
            padding:95, 
            flex:1,
            justifyContent:'center'
        }}
        ></Image>

         <TextInput style={{
             color:'Black', 
             fontSize:30,
             flex:1,
             textAlign:'center'
        }} placeholder="Digite seu e-mail"/>

         <TextInput style={{
             color:'Black', 
             fontSize:30
        }} placeholder="Digite sua senha"/>

         <Button style={{
             color:'Black',
         }}
         title= "Entrar" onPress={function() {console.log('teste')}}/>

        </view>

      </ImageBackground>

   
    );
  }
}
