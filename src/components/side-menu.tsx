import React from 'react';
import { View, } from 'react-native'
import { colors, height, width } from '../styles';
import { AccountSideBar } from '../views/side-bar/account-sidebar';
import { BottomSideBar } from '../views/side-bar/bottom-sidebar';
import { TopSideBar } from '../views/side-bar/top-sidebar';

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




