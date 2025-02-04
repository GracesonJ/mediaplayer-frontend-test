import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, removeVideo } from '../Services/allApi';

function VideoCard({ videoDetails, setDeleteStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
        let caption = videoDetails?.caption
        let url = videoDetails?.embededLink
        const time = new Date()
        console.log(time);
        const timeStamp = new Intl.DateTimeFormat("en-GB",{year:"numeric", month:"2-digit", day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(time)
        console.log(timeStamp);
        
        

        const reqBody = {
            caption,
            url,
            timeStamp

        }
        const result = await addHistoryApi(reqBody)
        console.log(result);
        
}
    const handleDelete = async (id) => {
        const result = await removeVideo(id)
        console.log(result);
        if(result.status>=200 && result.status<300){
            setDeleteStatus(result)
        }

    }

    return (
        <>

            <Card style={{ width: '100%' }} >
                <Card.Img onClick={handleShow} variant="top" style={{ width: "100%", height: "300px" }} src={videoDetails?.ImgUrl} />
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Title>{videoDetails?.caption}</Card.Title>
                    <Button onClick={() => handleDelete(videoDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></Button>
                </Card.Body>
            </Card>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{videoDetails?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="480" src={`${videoDetails?.embededLink}?autoplay=1`} title="Vidaamuyarchi - Pathikichu Lyric | Ajith Kumar | Trisha | Magizh Thirumeni | Anirudh | Subaskaran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard