import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import AllVideos from '../components/AllVideos'
import Categories from '../components/Categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [addStatus, setAddStatus] = useState({})
  const [updateCategoryStatus, setUpdateCategoryStatus] = useState([])
  return (
    <>
        <div className="container d-flex justify-content-between mt-5">
          <Add setAddStatus = {setAddStatus}/>
          <Link to={'/watchhistory'} style={{textDecoration:"none"}}><h5><span className='d-md-inline d-none '> Watch History</span> <FontAwesomeIcon icon={faClockRotateLeft}  className='ms-3'/></h5></Link>
        </div>

        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-9">
              <AllVideos addStatus={addStatus} setUpdateCategoryStatus={setUpdateCategoryStatus}/>
            </div>
            <div className="col-md-3">
              <Categories updateCategoryStatus={updateCategoryStatus}/>
            </div>
          </div>
        </div> 
    </>
  )
}

export default Home