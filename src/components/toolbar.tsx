import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ToolbarProps {
    titulo:string;
    menu?:boolean;
    back?:boolean;
}

export function Toolbar (props: ToolbarProps) {
    let leftComponent = <view/>

    if(props.menu)
          leftComponent =   <Icon name = "menu"/>
          
    return <Header 
    centerComponent={{text:props.titulo, style:{fontSize:25}}}
    containerStyle={{backgroundColor:'white'}}
    leftComponent={{}}
    
/>;
}
