import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './global/colors-enums';
export const { width, height } = Dimensions.get('window');

export const containerStyles = StyleSheet.create({
  landing: {
    height: (height - 80),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 20
  },
  index: {
    // padding: 20,
    // flex: 1,
    backgroundColor: colors.body.background.dark,
    position: 'relative',
    fontFamily: 'Josefin Sans',
    width: width
  },
  wrapper: {
    borderTopRightRadius: 300,
    padding: 20,
    backgroundColor: colors.body.background.light,
  },
  buttonBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  shareIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%'
  },
  header: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    position: 'absolute',
    paddingLeft: 20,
    paddingTop: 20,
    zIndex: 89
  },
  accountSideBarWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  },
  accountSideBarButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  }
})