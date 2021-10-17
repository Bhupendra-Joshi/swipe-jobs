import { ActionType } from '@types'
import { WORKER_JOB_MATCHES_STORE_ACTIONS } from './worker-job-matches.actions'

const initialState = {
  jobs: []
}

export const workerJobMatchesReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case WORKER_JOB_MATCHES_STORE_ACTIONS.WORKER_JOB_MATCHES_REQUEST_START:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      }

    case WORKER_JOB_MATCHES_STORE_ACTIONS.WORKER_JOB_MATCHES_REQUEST_SUCCESS:
      return {
        ...state,
        jobs: action.data,
        isLoading: false,
        isFailed: false,
      }

    case WORKER_JOB_MATCHES_STORE_ACTIONS.WORKER_JOB_MATCHES_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      }

    default:
      return state
  }
}
