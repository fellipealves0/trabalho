import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface SignUpScreeensProps {
}

export interface SignUpScreeensState {
}

export default class SignUpScreeens extends React.Component<SignUpScreeensProps, SignUpScreeensState> {
  constructor(props: SignUpScreeensProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>SignUpScreeens Component</Text>
      </View>
    );
  }
}
