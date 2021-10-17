import React, { memo, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

import { CustomScreenHeader, CustomView, CustomText, CustomFlatList, CustomImage, CustomTouchableOpacity } from '@components'
import { fetchWorkerJobMatches, useRootStore } from '@store'
import { config } from '@config'

import { styles } from './worker-job-matches-screen.styles'

const WorkerJobMatchesScreenComponent = () => {
  const store: any = useRootStore()
  const navigation = useNavigation()

  const { WorkerProfile, WorkerJobMatches } = store

  const getHeaderRightComponent = () => {
    return (
      <CustomText style={styles.Label}>
        {WorkerProfile.firstName} {WorkerProfile.lastName}
      </CustomText>
    )
  }

  useEffect(() => {
    fetchWorkerJobMatches(config.WORKER_ID)
  }, [])

  const onJobItemPress = useRef((jobItem: any) => {
    navigation.navigate('JobDetailsScreen', { job: jobItem })
  }).current

  const renderJobItem = (props:any) => {
    const { item } = props
    return (
      <CustomTouchableOpacity style={styles.ListItemContainer} onPress={() => onJobItemPress(item)}>
        <CustomImage source={{ uri: item?.jobTitle?.imageUrl }} style={styles.BannerImage}/>
        <CustomText style={styles.JobTitleText}>{item.jobTitle.name}</CustomText>
        <CustomText style={styles.CompanyText}>{item.company.name}</CustomText>
        <CustomText style={styles.ZoneText}>{item.company.address.zoneId}</CustomText>
      </CustomTouchableOpacity>
    )
  }

  return (
    <CustomView style={styles.Container}>
      <CustomScreenHeader RightComponent={getHeaderRightComponent}/>
      <CustomView style={styles.SubContainer}>
        <CustomFlatList
          data={WorkerJobMatches.jobs}
          renderItem={renderJobItem}
        />
      </CustomView>
    </CustomView>
  )
}

export const WorkerJobMatchesScreen = memo(WorkerJobMatchesScreenComponent)
