import { DrawerActions, useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ToolbarProps {
    titulo:string;
    menu?:boolean;
    back?:boolean;
}

export function Toolbar (props: ToolbarProps) {
    let leftComponent = <view/>
    
    const nav = useNavigation();

    if(props.menu)
          leftComponent = <TouchableOpacity onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
              <Icon name= "bars" size={25}/>
          </TouchableOpacity>
         

    return <Header 
    centerComponent={{text:props.titulo, style:{fontSize:25}}}
    containerStyle={{backgroundColor:'red'}}
    leftComponent={leftComponent}

    
/>;
}
