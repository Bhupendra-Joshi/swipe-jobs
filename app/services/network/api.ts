import * as Types from './api-types'
import { JobActionRequestType, WorkerIdRequestType } from '@types'
import { GetWorkerJobAccept, GetWorkerJobMatches, GetWorkerJobReject, GetWorkerProfile } from './api-invokes'

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * Worker profile request
   */
  static async fetchWorkerProfile(payload: WorkerIdRequestType): Promise<Types.APIResult> {
    return new GetWorkerProfile().invoke(payload)
  }

  /**
   * Worker job matches request
   */
  static async fetchWorkerJobMatches(payload: WorkerIdRequestType): Promise<Types.APIResult> {
    return new GetWorkerJobMatches().invoke(payload)
  }

  /**
   * Worker job accept request
   */
  static async acceptWorkerJob(payload: JobActionRequestType): Promise<Types.APIResult> {
    return new GetWorkerJobAccept().invoke(payload)
  }

  /**
   * Worker job reject request
   */
  static async rejectWorkerJob(payload: JobActionRequestType): Promise<Types.APIResult> {
    return new GetWorkerJobReject().invoke(payload)
  }

}
