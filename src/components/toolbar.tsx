import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export interface ToolbarProps {
    titulo:string;
}

export function Toolbar (props: ToolbarProps) {
    return <Header centerComponent={{text:props.titulo}}/>;
}
