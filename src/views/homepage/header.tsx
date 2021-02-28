import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon } from '../../components/icon';
import { SideMenu } from '../../components/side-menu';
import { colors, containerStyles } from '../../styles';

export const Header = () => {
  const [sidebar, showSidebar] = useState(false);

  const SideBar = () => {
    if (sidebar) return <SideMenu />
    return null;
  }

  const activateSidebar = () => {
    showSidebar(!sidebar);
  }
  const icons = [
    {
      type: "ionicon",
      name: "menu-outline",
      color: colors.dark,
      size: 30,
      onPress: () => activateSidebar()
    }
  ]

  return (
    <>
      <View style={containerStyles.header}>
        <Icon icons={icons} />
      </View>
      <SideBar />

    </>
  )
}