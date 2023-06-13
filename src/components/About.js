import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profileImg from "../imges/274430872_2178494325650233_6547295125975955884_n.jpg"
import "./About.css"
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';

const About = () => {
  return (
  <div className='ground about'>
      <Container className='About'>
        <Row className='handelAbout'>


        <Col lg="3" className='profileImg'><img src={profileImg} alt=""/></Col>



        <Col >
        <div className='about-me' > 
          <h4>About Me</h4>
          <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
        </div>
        <div className='details'>
         <Row>
          <Col lg="6" sm="12">
         <h4>Contact Details</h4>
          <div>
            <span>Nordic-Giant Project</span><br />
            <span> 
              <span>(Your Street)</span><br/>
              <span>(Your City) (Your State),<br/>
               (Your Zip/Postal Code)</span>

            </span> <br />
            <span>555-555-5555</span><br/>
            <span>youremailhere@gmail.com</span>
          
          </div>
          </Col>

          <Col>
          <button className='download-btn' type=""> <DownloadForOfflineSharpIcon/>  DownLoad Resume</button>
          </Col>

         </Row>
        </div>
        
        </Col>


        </Row>




    </Container>
  </div>
  )
}

export default About