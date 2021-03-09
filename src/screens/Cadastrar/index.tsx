import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface SignUpProps {}

export interface SignUpState {}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>SignUp Component</Text>
      </View>
    );
  }
}


<Text style={{color:'white',fontSize: 30}}>LoginScreens Component</Text>