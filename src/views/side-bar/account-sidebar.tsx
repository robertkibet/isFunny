import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/buttons';
import { Text } from '../../components/text';
import { containerStyles } from '../../styles';

export const AccountSideBar = () => {
  const buttons = [
    {
      title: 'Twitter',
      style: {
        backgroundColor: '#00acee',
      },
      onPress: () => {
        console.log('twitter');
      }
    },
    {
      title: 'Google',
      style: {
        backgroundColor: '#DB4437',
      },
      onPress: () => {
        console.log('google');
      }
    },
    {
      title: 'Facebook',
      style: {
        backgroundColor: '#3b5998',
        color:'white'
      },
      onPress: () => {
        console.log('fb');
      }
    }

  ]
  return (
    <>
      <View style={containerStyles.accountSideBarWrapper}>
        <Text message="Login" style={{ fontSize: 15 }} />
        <Text message="to save your content" style={{ fontSize: 12, }} />
      </View>
      <View style={containerStyles.accountSideBarButtonsWrapper}>
        <Button buttons={buttons} />
      </View>
    </>

  )
}