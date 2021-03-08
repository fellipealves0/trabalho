import * as React from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

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
      <View>
         <Text>LoginScreens Component</Text>
         <TextInput placeholder="Digite seu e-mail"/>
         <TextInput placeholder="Digite sua senha"/>
         <Button title= "Entrar" onPress={function() {console.log('teste')}} />
      </View>
      
    );
  }
}
