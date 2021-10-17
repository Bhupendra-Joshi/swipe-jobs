import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { useSelector } from 'react-redux'
import thunk from 'redux-thunk'

import { ObjectType } from '@types'

import { workerProfileReducer } from './worker-profile'
import { workerJobMatchesReducer } from './worker-job-matches'

const reducers = {
  WorkerProfile: workerProfileReducer,
  WorkerJobMatches: workerJobMatchesReducer,
}

const rootStore = combineReducers(reducers)
const middleware = applyMiddleware(thunk)

export const configureStore = () => createStore(rootStore, compose(middleware))

export const useRootStore = () => useSelector((state: ObjectType) => state)
export const useWorkerProfileStore = () => useSelector((state: ObjectType) => state.WorkerProfile)
export const useWorkerJobMatchesStore = () => useSelector((state: ObjectType) => state.WorkerJobMatches)

export * from 'react-redux'
