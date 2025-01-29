import React from 'react'
import VideoCard from './VideoCard'

function AllVideos() {
    return (
        <>
            <h2 className='mt-5'>All Videos</h2>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <VideoCard />
                    </div>
                    <div className="col-md-3"> <VideoCard /></div>
                    <div className="col-md-3"> <VideoCard /></div>
                    <div className="col-md-3"> <VideoCard /></div>
                </div>
            </div>


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


        </>
    )
}

export default AllVideos