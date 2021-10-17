import { Api } from '@services'

import { StoreRef } from '../common-store'

export const WORKER_PROFILE_STORE_ACTIONS = {

  WORKER_PROFILE_REQUEST_START: 'WORKER_PROFILE_REQUEST_START',
  WORKER_PROFILE_REQUEST_SUCCESS: 'WORKER_PROFILE_REQUEST_SUCCESS',
  WORKER_PROFILE_REQUEST_FAILED: 'WORKER_PROFILE_REQUEST_FAILED',

}

const workerProfileRequestStart = () => {
  return {
    type: WORKER_PROFILE_STORE_ACTIONS.WORKER_PROFILE_REQUEST_START
  }
}

const workerProfileRequestSuccess = (data:any) => {
  return {
    type: WORKER_PROFILE_STORE_ACTIONS.WORKER_PROFILE_REQUEST_SUCCESS,
    data: data
  }
}

const workerProfileRequestFailed = () => {
  return {
    type: WORKER_PROFILE_STORE_ACTIONS.WORKER_PROFILE_REQUEST_FAILED,
  }
}

export const fetchWorkerProfile = async (workerId:string) => {
  StoreRef.dispatch(workerProfileRequestStart())
  try {
    const response:any = await Api.fetchWorkerProfile({ workerId })
    if (response.success) {
      StoreRef.dispatch(workerProfileRequestSuccess(response.data))
    } else {
      StoreRef.dispatch(workerProfileRequestFailed())
    }
  } catch (error) {
    StoreRef.dispatch(workerProfileRequestFailed())
  }
}
