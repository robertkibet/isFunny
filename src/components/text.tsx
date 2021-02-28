import React from 'react';
import { Text as DefaultText } from 'react-native';
import { textStyles } from '../styles/index';

interface fontProps {
  message: any;
  style: object;
}
export const Text = ({ style, message }: fontProps) => {
  return (
    <DefaultText style={style}>
      {message}
    </DefaultText>
  )
}