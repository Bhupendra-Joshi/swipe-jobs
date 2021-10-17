import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({

  Container: {
    flex: 1,
    backgroundColor: COLORS.palette.lightGrey,
  } as ViewStyle,

  SubContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: COLORS.palette.white,
    margin: 10,
    marginBottom: 50,
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
    fontSize: FONT_SIZE.MEDIUM,
    paddingHorizontal: Device.horizontalScale(20)
  } as TextStyle,

  CompanyText: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_2X,
    fontWeight: '500',
    paddingHorizontal: Device.horizontalScale(20),
    marginBottom: Device.verticalScale(10)
  } as TextStyle,

  RateDistanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.palette.limeGreen,
    paddingHorizontal: Device.horizontalScale(20)
  } as ViewStyle,

  DistanceLabel: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_3X,
    fontWeight: '700',
    paddingTop: Device.verticalScale(15),
    paddingBottom: Device.verticalScale(5)
  } as TextStyle,

  RateLabel: {
    color: COLORS.palette.black,
    fontSize: FONT_SIZE.SMALL_3X,
    fontWeight: '700',
    paddingTop: Device.verticalScale(15),
    paddingBottom: Device.verticalScale(5)
  } as TextStyle,

  DistanceValue: {
    color: COLORS.palette.white,
    fontSize: FONT_SIZE.LARGE_X,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingBottom: Device.verticalScale(10),
  } as TextStyle,

  RateValueContainer: {
    flexDirection: 'row',
  } as ViewStyle,

  CurrencyText: {
    color: COLORS.palette.white,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.SMALL_2X,
    paddingBottom: Device.verticalScale(10),
  } as TextStyle,

  RateValue: {
    color: COLORS.palette.white,
    fontSize: FONT_SIZE.LARGE_X,
    fontWeight: 'bold',
    paddingBottom: Device.verticalScale(10),
  } as TextStyle,

})
