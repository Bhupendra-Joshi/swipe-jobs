import React, { memo } from 'react'
import { ScrollView } from 'react-native'

import { CustomScreenHeader, CustomView, CustomText, CustomImage } from '@components'
import { convertCentsToDollars, formatDateRange, formatPhone } from '@utils'
import { useWorkerProfileStore } from '@store'
import { translate } from '@translate'

import { styles } from './job-details-screen.styles'
import { JobDetailItem } from './components/job-detail-item'

const getReportToText = (reportTo: { name: string; phone: string }) => {
  return [
    reportTo.name,
    formatPhone(reportTo.phone)
  ]
}

const JobDetailsScreenComponent = (props:any) => {

  const WorkerProfile:any = useWorkerProfileStore()

  const job = props.route.params.job

  const getHeaderRightComponent = () => {
    return (
      <CustomText style={styles.Label}>
        {WorkerProfile.firstName} {WorkerProfile.lastName}
      </CustomText>
    )
  }

  return (
    <CustomView style={styles.Container}>
      <CustomScreenHeader RightComponent={getHeaderRightComponent}/>
      <ScrollView style={styles.Container}>
        <CustomView style={styles.SubContainer}>

          <CustomImage source={{ uri: job?.jobTitle?.imageUrl }} style={styles.BannerImage}/>
          <CustomText style={styles.JobTitleText}>{job.jobTitle.name}</CustomText>
          <CustomText style={styles.CompanyText}>{job.company.name}</CustomText>

          <CustomView style={styles.RateDistanceContainer}>
            <CustomText style={styles.DistanceLabel}>{translate('jobDetail.distance')}</CustomText>
            <CustomText style={styles.RateLabel}>{translate('jobDetail.hourlyRate')}</CustomText>
          </CustomView>

          <CustomView style={styles.RateDistanceContainer}>

            <CustomText style={styles.DistanceValue}>
              {job?.milesToTravel?.toFixed(2)} {translate('common.miles')}
            </CustomText>

            <CustomView style={styles.RateValueContainer}>
              <CustomText style={styles.CurrencyText}>{translate('common.currencyDollar')}</CustomText>
              <CustomText style={styles.RateValue}>{convertCentsToDollars(job.wagePerHourInCents, 2)}</CustomText>
            </CustomView>

          </CustomView>
          <JobDetailItem
            title={translate('jobDetail.shiftDates')}
            icon={'calendar'}
            values={job.shifts.map((shift: { startDate: string; endDate: string }) => formatDateRange(shift?.startDate, shift?.endDate))}
          />
          <JobDetailItem
            title={translate('jobDetail.location')}
            values={[job?.company?.address?.formattedAddress]}
            footerText={translate('jobDetail.milesFromYourLocation').replace('__DISTANCE__', job?.milesToTravel?.toFixed(2))}
            onPress={() => console.log('OPEN LOCATION')}
          />
          <JobDetailItem
            title={translate('jobDetail.requirements')}
            icon={'tools'}
            values={job?.requirements?.map((requirement:string) => ` - ${requirement}`) || ['NA']}
          />
          <JobDetailItem
            title={translate('jobDetail.reportTo')}
            icon={'user'}
            values={getReportToText(job?.company?.reportTo)}
            showDivider={false}
          />

        </CustomView>

      </ScrollView>
    </CustomView>
  )
}

export const JobDetailsScreen = memo(JobDetailsScreenComponent)
