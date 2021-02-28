import React from 'react';
import { View, } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { colors, height, width } from '../styles';
import { AccountSideBar } from '../views/side-bar/account-sidebar';
import { BottomSideBar } from '../views/side-bar/bottom-sidebar';
import { TopSideBar } from '../views/side-bar/top-sidebar';
import { Button } from './buttons';
import { Lists } from './lists';
import { Text } from './text';

const list = [
  {
    title: 'Saved Jokes',
    icon: 'save-outline'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]

export const SideMenu = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: width,
        zIndex: 1,
        height: height,
        backgroundColor: colors.grey
      }}
    >
      <TopSideBar />
      <View style={{ marginBottom: 20, position: 'absolute', bottom: 0, width: '100%' }} >
        <AccountSideBar />
        <BottomSideBar />
      </View>
    </View>
  )
}




