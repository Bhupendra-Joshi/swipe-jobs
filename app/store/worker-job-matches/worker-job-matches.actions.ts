import { Api } from '@services'

import { StoreRef } from '../common-store'

export const WORKER_JOB_MATCHES_STORE_ACTIONS = {

  WORKER_JOB_MATCHES_REQUEST_START: 'WORKER_JOB_MATCHES_REQUEST_START',
  WORKER_JOB_MATCHES_REQUEST_SUCCESS: 'WORKER_JOB_MATCHES_REQUEST_SUCCESS',
  WORKER_JOB_MATCHES_REQUEST_FAILED: 'WORKER_JOB_MATCHES_REQUEST_FAILED',

}

const workerJobMatchesRequestStart = () => {
  return {
    type: WORKER_JOB_MATCHES_STORE_ACTIONS.WORKER_JOB_MATCHES_REQUEST_START
  }
}

const workerJobMatchesRequestSuccess = (data:any) => {
  return {
    type: WORKER_JOB_MATCHES_STORE_ACTIONS.WORKER_JOB_MATCHES_REQUEST_SUCCESS,
    data: data
  }
}

const workerJobMatchesRequestFailed = () => {
  return {
    type: WORKER_JOB_MATCHES_STORE_ACTIONS.WORKER_JOB_MATCHES_REQUEST_FAILED,
  }
}

export const fetchWorkerJobMatches = async (workerId:string) => {
  StoreRef.dispatch(workerJobMatchesRequestStart())
  try {
    const response:any = await Api.fetchWorkerJobMatches({ workerId })
    if (response.success) {
      StoreRef.dispatch(workerJobMatchesRequestSuccess(response.data))
    } else {
      StoreRef.dispatch(workerJobMatchesRequestFailed())
    }
  } catch (error) {
    StoreRef.dispatch(workerJobMatchesRequestFailed())
  }
}
