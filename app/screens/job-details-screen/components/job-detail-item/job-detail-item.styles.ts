import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({

  Container: {
    flexDirection: 'row',
    paddingVertical: Device.verticalScale(10),
  } as ViewStyle,

  IconContainer: {
    marginHorizontal: 15,
    marginTop: 20,
  } as ViewStyle,

  SubContainer: {
    flex: 1,
  } as ViewStyle,

  Title: {
    fontSize: FONT_SIZE.SMALL_X,
    fontWeight: 'bold',
    paddingVertical: 5,
  } as TextStyle,

  ValueText: {
    fontSize: FONT_SIZE.SMALL_X,
    paddingBottom: 5
  } as TextStyle,

  FooterText: {
    fontSize: FONT_SIZE.SMALL_3X,
  } as TextStyle,

  Divider: {
    height: 1,
    backgroundColor: COLORS.palette.lightGrey,
    marginHorizontal: 20
  } as ViewStyle

})
