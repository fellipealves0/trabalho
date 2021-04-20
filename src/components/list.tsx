import * as React from 'react';
import { View, Text } from 'react-native';
import { ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export interface ListProps {
}

export function List (props: ListProps) {

    const List = [
        {
          title: 'Perfil',
          icon: 'user'
        },
        {
            title: 'Meus Favoritos',
            icon: 'heart'
          },
        {
          title: 'Endereços de Entrega',
          icon: 'envelope'
        },
        {
            title: 'Envie o meu pedido Para ',
            icon: 'flag'
          },
          {
            title: 'Idioma',
            icon: 'language'
          },
          {
            title: 'Configurações de Notificações',
            icon: 'bell'
          },
          {
            title: 'Histórico',
            icon: 'file-text'
          },
          {
            title: 'Sugestões',
            icon: 'lightbulb-o'
          },
          {
            title: 'Versão',
            icon: 'info'
          },
      ]

return (
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
    );
}