import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoApi, updateCategoryApi } from '../Services/allApi'

function AllVideos({addStatus, setUpdateCategoryStatus}) {
    const [video, setVideo] = useState([])
    const [deleteStatus, setDeleteStatus] = useState({})
    

    const getAllVideo = async () => {
        const result = await getVideoApi()
        console.log(result);
        setVideo(result.data)
    }
    console.log(video);  

    const dragOver = (e)=>{
        e.preventDefault()
    }

    const videoDrop = async (e)=>{
        const {videoDetails, categoryDetails} = JSON.parse(e.dataTransfer.getData("Details"))
        console.log(videoDetails, categoryDetails);

        let response = categoryDetails.allVideos.filter((item)=>item.id!= videoDetails.id)

        const reqBody = {
            category : categoryDetails.category,
            allVideos: response,
            id : categoryDetails.id
        }
        const result = await updateCategoryApi(categoryDetails.id , reqBody)
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
            setUpdateCategoryStatus(result)
          }
    }


    useEffect(() => {
        getAllVideo()
    }, [addStatus,deleteStatus])

    return (
        <>
            <h2 className='mt-5'>All Videos</h2>

            {video?.length > 0 ?
                <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
                    <div className="row">
                        {video?.map((item) => (
                            <div className="col-md-3" >
                                <VideoCard videoDetails = {item} setDeleteStatus={setDeleteStatus} />
                            </div>
                        ))
                        }
                        
                    </div>
                </div >
                :

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src="https://png.pngtree.com/png-vector/20190320/ourmid/pngtree-vector-add-to-cart-vector-icon-png-image_850691.jpg" alt="" />
                            <h5 className='text-center text-danger'>No Video Added Yet...</h5>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            }


        </>
    )
}

export default AllVideos