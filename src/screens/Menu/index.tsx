import * as React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    return (
      <View>
         <Text>HomeScreen</Text>
      </View>
    );
}

export function SettingScreen (props: HomeScreenProps) {
  return (
    <View>
       <Text>HomeScreen</Text>
    </View>
  );
}







