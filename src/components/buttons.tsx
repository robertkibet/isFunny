import React from 'react';
import { Button as DefaultButton } from 'react-native-elements'

export const Button = ({ buttons }: any) => {
  return buttons.map((btn: any, i: number) => (
    <DefaultButton
      key={i}
      title={btn.title}
      buttonStyle={{...btn.style || null}}
      onPress={btn.onPress || null}
    />
  ))
}