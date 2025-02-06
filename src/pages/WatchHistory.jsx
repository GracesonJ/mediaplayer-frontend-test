import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryApi, removeHistoryVideoApi } from '../Services/allApi'

function WatchHistory() {
  const [allHistoryVideo, setAllHistoryVideo] = useState([])
  const [deleteStatus, setDeleteStatus] = useState({})

  const getAllVideo = async () => {
    const result = await getHistoryApi()
    // console.log(result);
    setAllHistoryVideo(result.data);
  }
  console.log(allHistoryVideo);

  const handleDelete = async (id)=>{
    const result = await removeHistoryVideoApi(id)
    console.log(result);
    if(result.status >= 200 && result.status <300){
      setDeleteStatus(result)
    }else{
      alert(`Something Went Wrong`)
    } 
  }

  useEffect(() => {
    getAllVideo()
  }, [deleteStatus])
  return (
    <>
      <div className="d-flex justify-content-between px-5 mt-5">
        <h4>Watch History</h4>
        <Link to={'/home'} style={{ textDecoration: "none" }}><h4> <FontAwesomeIcon icon={faHouse} className='me-2' /><span className='d-md-inline d-none'>Back Home</span></h4></Link>
      </div>

      {allHistoryVideo?.length > 0 ?
        <div className="container-fluid w-100">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 table-responsive">
              <table className="table table-bordered mt-5">
                <thead>
                  <tr>
                    <td className='text-center'>#</td>
                    <td className='text-center'>Caption</td>
                    <td className='text-center'>URL</td>
                    <td className='text-center'>Time Stamp</td>
                    <td className='text-center'>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {allHistoryVideo?.map((item, index) => (
                    <tr>
                      <td className='text-center'>{index+1}</td>
                      <td className='text-center'>{item?.caption}</td>
                      <td className='text-center'><Link to={item.url} target='_blank'>{item?.url}</Link></td>
                      <td className='text-center'>{item?.timeStamp}</td>
                      <td className='text-center' ><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        :
        <h3 className='text-center text-danger'>No Watch History...</h3>}

    </>
  )
}

export default WatchHistory