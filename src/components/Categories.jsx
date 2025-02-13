import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoCard from './VideoCard';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi, updateCategoryApi } from '../Services/allApi';

function Categories({updateCategoryStatus}) {

  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [categoryStatus, setCategoryStatus] = useState({})
  const [deleteStatus, setDeleteStatus] = useState([])
  const [categoryUpdateStatus, setCategoryUpdateStatus] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleCancel = () => {
    setCategoryName("")
  }

  const handleAdd = async () => {
    if (!categoryName) {
      alert(`Fill the Category Name`)
    } else {
      const reqBody = {
        category: categoryName,
        allVideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        alert(`Category added successfully`)
        setCategoryStatus(result)
        handleClose()
        handleCancel()
      } else {
        alert(`Something Went Wrong`)
      }

    }
  }

  const getCategory = async () => {
    const result = await getAllCategoryApi()
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setAllCategory(result.data)

    }
  }

  console.log(allCategory);

  const deleteCategory = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setDeleteStatus(result)
    } else {
      alert(`Something Went Wrong`)
    }


  }


  useEffect(() => {
    getCategory()
  },
    [categoryStatus, deleteStatus, categoryUpdateStatus, updateCategoryStatus]
  )

  const videoOver = (e) => {
    e.preventDefault()
  }

  const videoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    if (categoryDetails.allVideos.find((item) => item.id == videoDetails.id)) {
      alert(`Video Already in the Same Category`)
    } else {
      categoryDetails.allVideos.push(videoDetails)
      console.log(categoryDetails);

      const result = await updateCategoryApi(categoryDetails.id, categoryDetails)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryUpdateStatus(result)
      }

    }

  }

  const videoDrag = (e, videoDetails, categoryDetails) => {
    console.log(videoDetails);
    console.log(categoryDetails);

    const details = {
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details", JSON.stringify(details))


  }


  return (
    <>
      <h4>Category</h4>
      <button onClick={handleShow} className='btn btn-warning w-100 mt-4'>Add Category</button>

      {allCategory?.length > 0 ?
        allCategory?.map((item) => (
          <div className="border border-secondary p-3 mt-3" droppable onDragOver={(e) => videoOver(e)} onDrop={(e) => videoDrop(e, item)}>
            <div className="d-flex justify-content-between align-items-center p-3 rounded mt-4">
              <h5>{item?.category}</h5>
              <Button onClick={() => deleteCategory(item?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></Button>
            </div>
            {item?.allVideos.length> 0 &&
              item?.allVideos.map((video) => (
                <div draggable onDragStart={(e) => videoDrag(e, video, item)}>
                  <VideoCard videoDetails={video} present={true} />
                </div>
              ))

            }
          </div>
        ))

        :
        <h5 className='text-center text-danger mt-5'>No Category Added</h5>}



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border-dark border'>
            <input onChange={(e) => setCategoryName(e.target.value)} value={categoryName} type="text" placeholder='Enter Category Name' className='form-control' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Categories