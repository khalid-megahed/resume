import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaAngleUp } from 'react-icons/fa';
import { Link } from "react-scroll";






import"./Footer.css"
const Footer = () => {
  return (
    <div className='allfooter'>
      <Container className='footer'>
      <Row>
    <div>
     <Link  to="header" spy={true} smooth={true} offset={100} duration={500}> <button> <FaAngleUp/></button></Link>
     
    </div>
   
      <div>
       <Link to=""><FaFacebookF/></Link>
       <Link to=""><BsTwitter/></Link>
       <Link to=""><FaLinkedinIn/></Link>
       <Link to=""><BsInstagram/></Link>
       <Link to=""><AiFillGithub/></Link>
      
      </div>
          <div className='textfooter'>
            
          <p>&copy;	 Copyright 2021 Nordic GiantDesign by Styleshout </p>
          </div>

      </Row>

    </Container>



   


    </div>
  )
}

export default Footer