import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface LoginScreensProps {
}

export interface LoginScreensState {
}

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
      </View>
    );
  }
}
