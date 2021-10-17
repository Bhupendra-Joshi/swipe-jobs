import React, { memo } from 'react'

import { CustomTouchableOpacity, CustomView, CustomText, Icon } from '@components'

import { JobDetailItemProps } from './job-detail-item.props'
import { styles } from './job-detail-item.styles'

const JobDetailItemComponent = (props:JobDetailItemProps) => {
  const {
    title,
    icon = 'location',
    values,
    footerText,
    showDivider = true,
    onPress
  } = props

  return (
    <>
      <CustomTouchableOpacity
        style={styles.Container}
        onPress={onPress}
        disabled={!onPress}
      >
        <CustomView style={styles.IconContainer} >
          {icon ? <Icon name={icon} size={25}/> : null}
        </CustomView>
        <CustomView style={styles.SubContainer} >
          <CustomText style={styles.Title}>{title}</CustomText>

          {
            values?.map?.((value:string, index:number) => {
              return value
                ? <CustomText key={`job-${index}`} style={styles.ValueText}>{value}</CustomText>
                : null
            })
          }

          <CustomText style={styles.FooterText}>{footerText}</CustomText>
        </CustomView>
        <CustomView style={styles.IconContainer} >
          {onPress ? <Icon name={'arrow-right'} size={25}/> : null}
        </CustomView>
      </CustomTouchableOpacity>
      {showDivider ? <CustomView style={styles.Divider}/> : null}
    </>
  )
}

export const JobDetailItem = memo(JobDetailItemComponent)
