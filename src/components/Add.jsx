import { faFilm, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {

    const [show, setShow] = useState(false);

    // state to create video details
    const [videoDetails, setVideoDetails] = useState({
        caption: "",
        ImgUrl: "",
        embededLink: ""
    })
    console.log(videoDetails);

    const handleCancel = () => {
        setVideoDetails({
            caption: "",
            ImgUrl: "",
            embededLink: ""
        })
    }

    const handleAdd = async () => {
        const { caption, ImgUrl, embededLink } = videoDetails // destructure
        if (!caption || !ImgUrl || !embededLink) {
            // alert(`Fill the form Completely`)
            toast.info(`Fill the form Completely`)
        } else {
            // alert(`Proceed`)
            // axios( ) will create seperate config
            // const result = await addVideoApi(videoDetails)
            // console.log(result);

            // https://youtu.be/tGCnglJGElk?si=lMbHIVhR7Rv9VjIO
            if (embededLink.startsWith('https://youtu.be/')) {
                let link = `https://www.youtube.com/embed/${embededLink.slice(17, 28)}`
                console.log(link);

                const result = await addVideoApi({ caption, ImgUrl, embededLink: link })
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    // alert(`Video Added Successfully`)
                    toast.success(`Video Added Successfully`)
                    handleClose()
                    setAddStatus(result)
                } else {
                    // alert(`Something Went Wrong`)
                    toast.error(`Something Went Wrong`)
                    handleCancel()
                }



            } else {
                // https://www.youtube.com/watch?v=tGCnglJGElk
                let link = `https://www.youtube.com/embed/${embededLink.slice(-11)}`
                console.log(link);

                const result = await addVideoApi({ caption, ImgUrl, embededLink: link })
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    // alert(`Video Added Successfully`)
                    toast.success(`Video Added Successfully`)
                    handleClose()
                    setAddStatus(result) 
                } else {
                    // alert(`Something Went Wrong`)
                    toast.error(`Something Went Wrong`)
                    handleCancel()
                }

            }

            // https://www.youtube.com/watch?v=tGCnglJGElk
            // https://youtu.be/tGCnglJGElk?si=lMbHIVhR7Rv9VjIO
        }
    }


    const handleClose = () => {
        setShow(false)
        handleCancel()
    }
    const handleShow = () => setShow(true);

    return (
        <>
            <h4><span className='d-md-inline d-none' style={{ textDecoration: "none" }}>Upload New Video</span> <FontAwesomeIcon onClick={handleShow} icon={faUpload} className='ms-3' /></h4>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-3' />Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Please fill the following details</p>
                    <form action="" className='border border-secondary p-3 rounded'>
                        <div className="mb-3"><input onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} value={videoDetails.caption} type="text" className='form-control' placeholder='Video Caption' /></div>
                        <div className="mb-3"><input onChange={(e) => setVideoDetails({ ...videoDetails, ImgUrl: e.target.value })} value={videoDetails.ImgUrl} type="text" className='form-control' placeholder='Video Image' /></div>
                        <div className="mb-3"><input onChange={(e) => setVideoDetails({ ...videoDetails, embededLink: e.target.value })} value={videoDetails.embededLink} type="text" className='form-control' placeholder='Video URL' /></div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleAdd}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer 
            position='top-center' theme="colored" autoClose={2000} />
        </>
    )
}

export default Add