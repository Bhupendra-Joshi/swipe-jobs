export interface ObjectType {
  [key: string]: boolean | string | number | ObjectType
}

export interface ActionType {
  type: string
  data: ObjectType
}

export interface WorkerIdRequestType {
  workerId: string
}

export interface JobActionRequestType {
  workerId: string
  jobId: string
}

export * from 'react-native-screens/lib/typescript/native-stack/types'
