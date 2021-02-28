import React from 'react';
import { Icon as DefaultIcon } from 'react-native-elements'
import { colors } from '../styles';

interface iconProps {
  icons: any;
}
export const Icon = ({ icons }: iconProps) => {
  const Item = () => {
    if (Array.isArray(icons)) {
      return icons.map((icon: any, i: number) => (
        <DefaultIcon key={i} name={icon.name} color={icon.color || colors.dark} size={icon.size || 20} type={icon.type} onPress={icon.onPress} />
      ))
    }
    return <DefaultIcon name={icons.name} color={icons.color || colors.dark} size={icons.size || 20} type={icons.type} onPress={icons.onPress || null} />
  }
  
  return <Item />
}