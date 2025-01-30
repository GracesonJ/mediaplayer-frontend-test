// add video api

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}