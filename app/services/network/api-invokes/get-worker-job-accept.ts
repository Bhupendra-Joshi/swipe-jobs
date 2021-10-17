import { ApiService, APIResult, BaseApiHandler, API_STATUS, API_PATH } from '@services'
import { JobActionRequestType } from '@types'

export class GetWorkerJobAccept implements BaseApiHandler {
  /**
   * Function to invoke GET API to login user
   */
  async invoke(payload: JobActionRequestType): Promise<APIResult> {
    const result: any = await ApiService.getInstance()
      .get(API_PATH.WORKER_JOB_ACCEPT.replace('__WORKER_ID__', payload.workerId).replace('__JOB_ID__', payload.jobId))

    const { data = {}, kind = '' } = result

    if (kind === API_STATUS.OK) {
      return {
        success: true,
        data
      }
    } else {
      throw new Error(result)
    }
  }
}
