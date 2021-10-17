import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.palette.warmGrey,
  } as ViewStyle,

  SubContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: COLORS.palette.white,
    overflow: 'hidden',
    marginHorizontal: Device.horizontalScale(10),
    marginVertical: Device.verticalScale(10),
    paddingHorizontal: Device.horizontalScale(10),
    paddingVertical: Device.verticalScale(10)
  } as ViewStyle,

  ProfileItemContainer: {
    paddingHorizontal: Device.horizontalScale(10),
    paddingVertical: Device.verticalScale(10)
  } as ViewStyle,

  ProfileItemLabel: {
    color: COLORS.palette.black,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.SMALL_X,
  } as TextStyle,

  ProfileItemValue: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_3X,
  } as TextStyle,

  ProfileItemDivider: {
    height: 1,
    backgroundColor: COLORS.palette.warmGrey,
    marginVertical: Device.horizontalScale(10)
  } as ViewStyle,

  Button: {
    marginTop: Device.verticalScale(50),
  } as ViewStyle,

})
