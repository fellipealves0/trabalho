import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

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
         <Button title= "Entrar" onPress={function() {console.log('teste')}} />
      </View>
    );
  }
}
