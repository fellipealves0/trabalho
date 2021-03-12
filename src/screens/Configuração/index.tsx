import * as React from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Button, Input, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import { useNavigation } from '@react-navigation/core';

export interface SettingScreenProps {
}

export default function SettingScreen (props: SettingScreenProps) {
    return (
      <View>
         <Text>SettingScreen</Text>
      </View>
    );
}
