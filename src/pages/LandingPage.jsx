import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Container fluid className='mt-5'>
        <Row className=' mt-5 d-flex justify-content-center align-items-center'>
          <Col md={1}></Col>
          <Col sm={12} md={5}>
            <h1>Welcome to <span className='text-warning'>Media Player</span></h1>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in cumque officia neque facere iusto repellat esse, nulla explicabo deserunt unde voluptatem est velit quibusdam ipsa eos quae! Odio, et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente obcaecati quisquam, sed, odio, libero debitis commodi vero excepturi numquam ab quia dolores. Facere blanditiis sint repudiandae ducimus, pariatur consequatur accusamus.</p>
            <Link to={'/home'} className='btn btn-warning mt-3'>Get Started</Link>
          </Col>
          <Col md={1}></Col>
          <Col sm={12} md={4} className='d-flex justify-content-center'>
            <img src="https://media.giphy.com/media/pViWHLiQBA1q0/giphy.gif?cid=ecf05e47bs5kjnxvflc9mcd3zabelmrzeu8l0taev2d8motl&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="" style={{ width: "250px", height: "250px" }} className='mt-5' />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>


      {/* ----------------- Features ----------------- */}
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <h2 className='text-light text-center'>Features</h2>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row mt-4">
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='mt-md-0 mt-5'>
                  <Card.Img style={{ height: "250px" }} variant="top" src="https://media.giphy.com/media/Qvp6Z2fidQR34IcwQ5/giphy.gif?cid=ecf05e47bxus6smy2fhkvm8hb84ncw67moizy0z8wxxemxu2&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='mt-md-0 mt-5'>
                  <Card.Img style={{ height: "250px" }} variant="top" src="https://media.giphy.com/media/l4XfgLyXAnyzCh7vfY/giphy.gif?cid=ecf05e47bxus6smy2fhkvm8hb84ncw67moizy0z8wxxemxu2&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='mt-md-0 mt-5'>
                  <Card.Img style={{ height: "250px" }} variant="top" src="https://media.giphy.com/media/ieOrFxCQPfyRTDnrv0/giphy.gif?cid=ecf05e475ub6z5mb6uwuyvzv7gp6tuc2mticbg9faba53ct7&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      {/* -------------- --------------- */}
      <div className="container mt-5">
        <div className="row">
          <div className="col border border-secondary border-2 rounded p-md-5 p-4">
            <div className="row ">
              <div className='col-md-6'>
                <h2 className='text-warning'>Simple fast and PowerFul</h2>
                <p className='mt-2'><span className='fs-3'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
                <p className='mt-2'><span className='fs-3'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
                <p className='mt-2'><span className='fs-3'>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
              </div>

              <div className=" col-md-6">
                <iframe width="100%" height="350" src="https://www.youtube.com/embed/7h4FhEePjuU?list=RD7h4FhEePjuU" title="Uyirey - Lyrical | Amaran | Sivakarthikeyan, Sai Pallavi | GV Prakash | Rajkumar | Kamal Haasan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LandingPage