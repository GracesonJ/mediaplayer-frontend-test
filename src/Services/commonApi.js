import axios from "axios"

export const commonApi = async(httprequest, url, reqBody)=>{
    const reqConfig = {
        method: httprequest, //post
        url, //serverUrl
        data: reqBody, //video details
        headers:{"Content-Type":"application/json"}

    }
    return await axios(reqConfig).then((result)=>{
        return result // block level so need to return
    }).catch((err)=>{
        return err
    })
    
}