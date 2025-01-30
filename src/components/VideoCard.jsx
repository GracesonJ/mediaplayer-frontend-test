import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Card style={{ width: '100%' }} onClick={handleShow}>
                <Card.Img variant="top" style={{ width: "100%", height: "300px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdowGTYsZbokoKohmPUx0OiO1l6bXcFHoaQ&s" />
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></Button>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/WR8PyAhn6tQ?autoplay=1" title="Vidaamuyarchi - Pathikichu Lyric | Ajith Kumar | Trisha | Magizh Thirumeni | Anirudh | Subaskaran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard