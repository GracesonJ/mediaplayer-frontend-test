import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoApi } from '../Services/allApi'

function AllVideos() {
    const [video, setVideo] = useState([])

    const getAllVideo = async () => {
        const result = await getVideoApi()
        console.log(result);
        setVideo(result.data)
    }
    console.log(video);


    useEffect(() => {
        getAllVideo()
    }, [])
    return (
        <>
            <h2 className='mt-5'>All Videos</h2>

            {video?.length > 0 ?
                <div className="container-fluid mt-5">
                    <div className="row">
                        {video?.map((item) => (
                            <div className="col-md-3" >
                                <VideoCard videoDetails = {item} />
                            </div>
                        ))
                        }
                        <div className="col-md-3"> <VideoCard /></div>
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