import { ApiService, APIResult, BaseApiHandler, API_STATUS, API_PATH } from '@services'
import { WorkerIdRequestType } from '@types'

export class GetWorkerProfile implements BaseApiHandler {
  /**
   * Function to invoke GET API to login user
   */
  async invoke(payload: WorkerIdRequestType): Promise<APIResult> {
    const result: any = await ApiService.getInstance()
      .get(API_PATH.WORKER_PROFILE.replace('__WORKER_ID__', payload.workerId))

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
