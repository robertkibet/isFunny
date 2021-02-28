import React from 'react';
import { ListItem } from 'react-native-elements';
import { Icon } from './icon';

export const Lists = ({ lists }: any) => {
  return lists.map((list:any, i:number) => (
    <ListItem key={i} bottomDivider={list.divider} onPress={list.onPress}>
      <Icon icons={list.icons} />
      <ListItem.Content>
        <ListItem.Title>{list.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ))
}