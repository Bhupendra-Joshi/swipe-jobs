import { IconType } from '@components'

export interface JobDetailItemProps {
  title: string
  icon?: IconType
  values?: string[]
  footerText?: string
  showDivider?: boolean
  onPress?: () => void
}
