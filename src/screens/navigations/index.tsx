// @ts-nocheck
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../Entrar';
import SignupScreen from '../Cadastrar';
import { HomeScreen } from '../Menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EuScreen from '../Eu';
import BuscarScreen from '../Buscar';


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color}) => {
          let iconName;
          if (route.name === 'Menu') {
            iconName = focused ? 'home' : 'home';

          } else if (route.name === 'Categoria') {
            iconName = focused ? 'apps' : 'apps';

          }else if (route.name === 'Notificações') {
            iconName = focused ? 'notifications' : 'notifications';
        
          }else if (route.name === 'Eu') {
            iconName = focused ? 'person' : 'person';
          }
          
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Menu" component={HomeScreen}/>
      <Tab.Screen name="Categoria" component={BuscarScreen}/>
      <Tab.Screen name="Notificações" component={BuscarScreen}/>
      <Tab.Screen name="Eu" component={EuScreen}/>
      
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
