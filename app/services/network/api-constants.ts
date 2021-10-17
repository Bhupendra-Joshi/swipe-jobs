import { config } from '@config'

// API status
export const API_STATUS = {
  ERROR: 'error',
  OK: 'ok',
  SUCCESS: 'success',
  FAIL: 'fail',
  UPDATED: 'updated'
}

export const API_RESPONSE_TYPE = 'json'

export const API_PATH = {
  WORKER_PROFILE: '__WORKER_ID__/profile',
  WORKER_JOB_MATCHES: '__WORKER_ID__/matches',
  WORKER_JOB_ACCEPT: '__WORKER_ID__/job/__JOB_ID__/accept',
  WORKER_JOB_REJECT: '__WORKER_ID__/job/__JOB_ID__/reject'
}

export const API_CONFIG = {
  timeout: config.API_TIME_OUT,
  headers: {
    common: {
      'Authorization': '',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
}
