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

// api to get video from history
export const getHistoryApi = async ()=>{
    return await commonApi(`GET`, `${serverUrl}/history`,"")
}

// api to delete watch history video
export const removeHistoryVideoApi  = async(id)=>{
    return await commonApi(`DELETE`,`${serverUrl}/history/${id}`,{})
}

// api to add category
export const addCategoryApi = async (reqBody)=>{
    return await commonApi("POST", `${serverUrl}/category`, reqBody)
}

// api to get category
export const getAllCategoryApi = async ()=>{
    return await commonApi(`GET`,`${serverUrl}/category`)
}

//api to delete category
export const deleteCategoryApi = async (id)=>{
    return await commonApi(`DELETE`, `${serverUrl}/category/${id}`,{})
}