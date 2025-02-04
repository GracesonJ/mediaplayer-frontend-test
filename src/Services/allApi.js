// add video api

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// add video api
export const addVideoApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// get video api
export const getVideoApi = async () => {
    return await commonApi('GET', `${serverUrl}/videos`, "")
}

// api to remove video
export const removeVideo = async (id) => {
    return await commonApi(`DELETE`, `${serverUrl}/videos/${id}`,{})
}

// api to add video to history
export const addHistoryApi = async (reqBody)=>{
    return await commonApi(`POST`,`${serverUrl}/history`, reqBody)
}