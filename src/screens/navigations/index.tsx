import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../Entrar';
import SignupScreen from '../Cadastrar';
import { HomeScreen } from '../Menu';
import { SettingScreen } from '../Configuração';


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export const MainNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name= "Entrar" component={LoginScreen} />
           <Stack.Screen name= "Cadastrar" component={SignupScreen} />
           <Stack.Screen name= "Menu" component={MyTabs} />
        </Stack.Navigator>
    </NavigationContainer>
)
