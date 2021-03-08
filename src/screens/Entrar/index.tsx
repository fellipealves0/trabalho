import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface LoginScreeensProps {
}

export interface LoginScreeensState {
}

export default class LoginScreeens extends React.Component<LoginScreeensProps, LoginScreeensState> {
  constructor(props: LoginScreeensProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>LoginScreeens Component</Text>
      </View>
    );
  }
}
