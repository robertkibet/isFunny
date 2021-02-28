import React from 'react';
import { Button as DefaultButton } from 'react-native-elements'

export const Button = ({ buttons }: any) => {
  return buttons.map((btn: any, i: number) => (
    <DefaultButton
      key={i}
      title={btn.title}
      type={btn.type}
      buttonStyle={{ ...btn.style || null }}
      onPress={btn.onPress || null}
      icon={btn.icon || null}
      iconRight={btn.iconRight ? btn.iconRight : null}
      titleStyle={{ ...btn.style || null }}
    />
  ))
}