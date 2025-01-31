// add video api

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// add video api
export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// get video api
export const getVideoApi = async()=>{
    return await commonApi('GET', `${serverUrl}/videos`,"")
}