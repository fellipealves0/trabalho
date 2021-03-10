import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface LoginScreenProps {
}

export interface LoginScreenState {
}

export default class LoginScreenComponent extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props: LoginScreenProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>LoginScreen Component</Text>
      </View>
    );
  }
}
