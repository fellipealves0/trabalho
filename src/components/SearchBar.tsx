// @ts-nocheck
import * as React from "react";
import { SearchBar } from "react-native-elements";

export default () => {
  const [value, setValue] = React.useState("");
  return (
    <SearchBar
      platform="ios"
      containerStyle={{paddingTop:10, marginTop:60}}
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