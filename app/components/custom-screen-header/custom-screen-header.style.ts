import { StyleSheet } from 'react-native'

import { COLORS, FONT_SIZE } from '@theme'
import { Device } from '@utils'

export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.palette.black,
    height: Device.verticalScale(64),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10,
  },

  Label: {
    color: COLORS.palette.white,
    fontWeight: '300',
    fontSize: FONT_SIZE.LARGE_3X
  },

  LabelBold: {
    color: COLORS.palette.white,
    fontWeight: '600',
    fontSize: FONT_SIZE.LARGE_3X
  }
})
