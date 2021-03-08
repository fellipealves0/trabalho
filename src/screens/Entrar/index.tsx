import * as React from 'react';
import {ImageBackground, StyleSheet, Text, Button, TextInput} from 'react-native';

import PlanodeFundo from './../../assets/backgroung.png';

import EmailIcon from './../../assets/email.svg';

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
                                     
         <Text>LoginScreens Component</Text>
         <TextInput placeholder="Digite seu e-mail"/>
         <TextInput placeholder="Digite sua senha"/>
         <Button title= "Entrar" onPress={function() {console.log('teste')}}/>
      </ImageBackground>
    );
  }
}
