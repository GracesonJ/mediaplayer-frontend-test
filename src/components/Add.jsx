import { faFilm, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h4><span className='d-md-inline d-none' style={{textDecoration:"none"}}>Upload New Video</span> <FontAwesomeIcon onClick={handleShow} icon={faUpload} className='ms-3' /></h4>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm}  className='me-3'/>Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Please fill the following details</p>
                    <form action="" className='border border-secondary p-3 rounded'>
                        <div className="mb-3"><input type="text" className='form-control' placeholder='Video Caption' /></div>
                        <div className="mb-3"><input type="text" className='form-control' placeholder='Video Image' /></div>
                        <div className="mb-3"><input type="text" className='form-control' placeholder='Video URL' /></div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add