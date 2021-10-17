import React from 'react'

import { translate } from '@translate'

import { CustomView, CustomText } from '../custom-native-components'

import { CustomScreenHeaderProps } from './custom-screen-header.props'
import { styles } from './custom-screen-header.style'

export const CustomScreenHeader = (props:CustomScreenHeaderProps) => {
  const {
    LeftComponent,
    RightComponent,
    CenterComponent,
  } = props

  const getLeftComponent = () => {
    if (LeftComponent) {
      return (<LeftComponent/>)
    } else {
      return (
        <CustomText style={styles.Label}>
          {translate('common.swipe')}
          <CustomText style={styles.LabelBold}>
            {translate('common.jobs')}
          </CustomText>
        </CustomText>
      )
    }
  }

  const getCenterComponent = () => {
    if (CenterComponent) {
      return (<CenterComponent/>)
    } else {
      return null
    }
  }

  const getRightComponent = () => {
    if (RightComponent) {
      return (<RightComponent/>)
    } else {
      return null
    }
  }

  return (
    <>
      <CustomView style={styles.Container}>
         {getLeftComponent()}
         {getCenterComponent()}
         {getRightComponent()}
      </CustomView>
    </>
  )
}
