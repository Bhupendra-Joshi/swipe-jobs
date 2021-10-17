import React, { memo, useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'

import { CustomScreenHeader, CustomView, CustomText, CustomButton } from '@components'
import { fetchWorkerProfile, useWorkerProfileStore } from '@store'
import { translate } from '@translate'
import { config } from '@config'

import { styles } from './worker-profile-screen.styles'
import { ScrollView } from 'react-native'

const WorkerProfileScreenComponent = () => {
  const navigation = useNavigation()

  const WorkerProfile: any = useWorkerProfileStore()

  const onFindJobsPress = useRef(() => {
    navigation.navigate('WorkerJobMatchesScreen')
  }).current

  useEffect(() => {
    fetchWorkerProfile(config.WORKER_ID)
  }, [])

  const ProfileItem = (props : { label:string, value:string }) => {
    return (
      <CustomView style={styles.ProfileItemContainer}>
        <CustomText style={styles.ProfileItemLabel}>{props.label}</CustomText>
        <CustomText style={styles.ProfileItemValue}>{props.value || '-'}</CustomText>
        <CustomView style={styles.ProfileItemDivider}/>
      </CustomView>
    )
  }

  return (
    <CustomView style={styles.Container}>

      <CustomScreenHeader/>

      <ScrollView>

        <CustomView style={styles.SubContainer}>

          <ProfileItem label={translate('profile.name')} value={`${WorkerProfile.firstName} ${WorkerProfile.lastName}`}/>
          <ProfileItem label={translate('profile.email')} value={WorkerProfile.email}/>
          <ProfileItem label={translate('profile.phoneNumber')} value={WorkerProfile.phoneNumber}/>
          <ProfileItem label={translate('profile.address')} value={WorkerProfile.address?.formattedAddress}/>
          <ProfileItem label={translate('profile.zone')} value={WorkerProfile.address?.zoneId}/>
          <ProfileItem label={translate('profile.maxJobDistance')} value={WorkerProfile.maxJobDistance}/>

          <CustomButton label={translate('common.findJobs')} onPress={onFindJobsPress} buttonStyle={styles.Button}/>

        </CustomView>

      </ScrollView>
    </CustomView>
  )
}

export const WorkerProfileScreen = memo(WorkerProfileScreenComponent)
