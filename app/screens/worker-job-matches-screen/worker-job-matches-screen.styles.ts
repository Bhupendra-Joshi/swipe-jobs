import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: COLORS.palette.warmGrey,
  } as ViewStyle,

  SubContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: COLORS.palette.pinkishGrey,
    margin: 10,
    overflow: 'hidden'
  } as ViewStyle,

  Label: {
    color: COLORS.palette.white,
    fontSize: FONT_SIZE.SMALL_2X,
  } as TextStyle,

  ListItemContainer: {
    marginVertical: Device.verticalScale(10),
    marginHorizontal: Device.horizontalScale(10),
    paddingBottom: Device.verticalScale(10),
    backgroundColor: COLORS.palette.white,
    borderRadius: 10,
    overflow: 'hidden'
  } as ViewStyle,

  BannerImage: {
    height: Device.verticalScale(130),
  } as ImageStyle,

  JobTitleText: {
    color: COLORS.palette.black,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.LARGE_3X,
    paddingHorizontal: Device.horizontalScale(10)
  } as TextStyle,

  CompanyText: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_3X,
    paddingHorizontal: Device.horizontalScale(10)
  } as TextStyle,

  ZoneText: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_3X,
    paddingHorizontal: Device.horizontalScale(10)
  } as TextStyle

})
