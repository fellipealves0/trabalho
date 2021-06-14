import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text } from 'react-native';

export interface ProdutoScreenProps {
}

export function ProdutoScreen (props: ProdutoScreenProps) {

const nav = useNavigation()

    return (
      <View>
         <Text>ProdutoScreen</Text>
      </View>
    );
}
