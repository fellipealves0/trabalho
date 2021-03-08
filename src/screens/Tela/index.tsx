import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface TelaScreensProps {
}

export interface TelaScreensState {
}

export default class TelaScreens extends React.Component<TelaScreensProps, TelaScreensState> {
  constructor(props: TelaScreensProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>App Component</Text>
      </View>
    );
  }
}
