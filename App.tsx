import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './src/screens/navigations';
import firebase from 'firebase';
import {firebaseConfig} from './src/config/firebase';

firebase.initializeApp(firebaseConfig)

export default function App() {
  return (<MainNavigation/>);
}