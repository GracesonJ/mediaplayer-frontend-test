import React from 'react'
import Button from 'react-bootstrap/Button';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoCard from './VideoCard';

function Categories() {
  return (
    <>
    <h4>Category</h4>
    <button className='btn btn-warning w-100 mt-4'>Add Category</button>
    <div className="border border-secondary p-3 mt-3">
      <div className="d-flex justify-content-between align-items-center p-3 rounded mt-4">
        <h5>Malayalam Songs</h5>
        <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{color:"white"}}/></Button>
      </div>
      <VideoCard/>
    </div>

    <h5 className='text-center text-danger mt-5'>No Category Added</h5>
    
    </>
  )
}

export default Categories