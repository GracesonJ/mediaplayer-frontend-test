import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import React from 'react'
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="py-5 px-4 mt-md-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4">
              <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beat className='me-3' /> MEDIA PLAYER</h4>
              <p style={{ textAlign: "justify" }} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, id beatae! Hic temporibus quae, vitae non quos dolorum, nostrum autem maxime commodi inventore veritatis sed nam blanditiis unde dolorem odio?</p>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
              <div>
                <h4>Links</h4>
                <Link to={'/'} className='mt-2'><p>Landing Page</p></Link>
                <Link to={'/home'}><p>Home Page</p></Link>
                <Link to={'/watchhistory'}><p>Watch History Page</p></Link>
              </div>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
              <div>
                <h4>Links</h4>
                <Link to={''} className='mt-2'><p>React</p></Link>
                <Link to={''}><p>React Bootstrap</p></Link>
                <Link to={''}><p>Bootswatch</p></Link>
              </div>
            </div>
            <div className="col-md-4 px-md-5 mt-2 mt-md-0">
              <h4>Contact Us</h4>
              <div className=" d-flex">
                <input type="text" placeholder='Email Id' className='form-control me-3' />
                <button className='btn btn-warning'>Subscribe</button>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <FontAwesomeIcon className='fa-2x' icon={faLinkedin} />
                <FontAwesomeIcon className='fa-2x' icon={faTwitter} />
                <FontAwesomeIcon className='fa-2x' icon={faFacebook} />
                <FontAwesomeIcon className='fa-2x' icon={faInstagram} />
                <FontAwesomeIcon className='fa-2x' icon={faWhatsapp} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer