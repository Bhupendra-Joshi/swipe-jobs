import { ActionType } from '@types'
import { WORKER_PROFILE_STORE_ACTIONS } from './worker-profile.actions'

const initialState = {
  workerId: '',
  firstName: '',
  lastname: '',
  email: '',
  phoneNumber: '',
  maxJobDistance: '',
  imageUri: '',
  address: {
    formattedAddress: '',
    zoneId: '',
  },
  isLoading: false,
  isFailed: false
}

export const workerProfileReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case WORKER_PROFILE_STORE_ACTIONS.WORKER_PROFILE_REQUEST_START:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      }

    case WORKER_PROFILE_STORE_ACTIONS.WORKER_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.data,
        imageUri: '',
        isLoading: false,
        isFailed: false,
      }

    case WORKER_PROFILE_STORE_ACTIONS.WORKER_PROFILE_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      }

    default:
      return state
  }
}
