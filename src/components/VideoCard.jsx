import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoCard() {
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" style={{width:"100%", height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdowGTYsZbokoKohmPUx0OiO1l6bXcFHoaQ&s" />
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title>Card Title</Card.Title>
                    <Button variant="danger"><FontAwesomeIcon icon={faTrash} style={{color:"white"}}/></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default VideoCard