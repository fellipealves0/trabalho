import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ListCategoriaProps {
}

export function ListCategoria (props: ListCategoriaProps) {
  
    const nav = useNavigation()
    const List = [
        {
          title: 'Masculino',
          icon: 'user'
        },
        {
            title: 'Feminino',
            icon: 'heart'
          },
        {
            title: 'Infantil',
            icon: 'envelope'
        },
        {
            title: 'Unissex',
            icon: 'flag'
          },
          {
            title: 'Personalize',
            icon: 'language'
          },
          
      ]

return (
     
<TouchableOpacity>
    <View>
         { List.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>

        </ListItem.Content>
      </ListItem>
    ))
  }
  
     </View>
</TouchableOpacity>

    );
}