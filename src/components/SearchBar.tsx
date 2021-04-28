import * as React from "react";
import { SearchBar } from "react-native-elements";
import {ImageBackground, StyleSheet, TextInput,Text,View, LogBox} from 'react-native';

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="android"
      containerStyle={{}}
      inputContainerStyle={{}}
      inputStyle={{}}
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      loadingProps={{}}
      placeholder="Buscar Produto"
      placeholderTextColor="#888"
      cancelButtonTitle="Cancelar"
      cancelButtonProps={{}}
      value={value}
    />
  );
}