import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Resume.css"
import { ProgressBar } from 'react-bootstrap';


const Resume = () => {
  return (
    <Container>
          <div className='resume'>
            <Row>
              <Col className='left-resume' lg="3" sm="12">
                <h4>EDUCATION</h4>
              </Col>
              <Col className='right-resume'>
              <h3>University?</h3>
              <p>Masters in Beer tasting •April 2017</p>
              <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
              <h3>School #1 Maybe College??</h3>
              <p>What did you study 101 •March 2013</p>
              <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p> 
              </Col>

              
            </Row><hr/>

                <Row>
              <Col className='left-resume' lg="3" sm="12">
                <h4>WORK</h4>
              </Col>
              <Col className='right-resume'>
              <h3>Awesome Design Studio?</h3>
              <p>Senior UX God • March 2018 - Present</p>
              <p> Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p>
              <h3>Super Cool Studio</h3>
              <p>What did you study 101 •March 2013</p>
              <p>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p> 
              </Col>

              
            </Row>   
            <hr/>

                <Row>
              <Col className='left-resume' lg="3" sm="12">
                <h4>SKILLS</h4>
              </Col>
              <Col className='bars'>
              <p>Here you can create a short write-up of your skills to show off to employers</p>



              <div >
                <ul className="skills">
                  <li>
                    <em>Python</em>
                    <ProgressBar className='danger' variant="danger" now={70} />
                    </li>
                    <li><em>VueJs</em>
                    <ProgressBar className='danger' variant="primary-gradient" now={60} />
                    </li>
                    <li><em>ReactJs</em>
                    <ProgressBar className='danger' variant="secondary" now={50} />
                    </li>
                    <li><em>CSS</em>
                    <ProgressBar className='danger' variant="success" now={90} />
                    </li>
                    <li><em>PHP</em>
                    <ProgressBar className='danger' variant="dark" now={80} />
                    </li>
                    <li><em>Swift</em>
                    <ProgressBar className='danger' variant="info" now={50} />
                    
                    </li>
                    <li>
                    
                    
                    <em>JAVA</em>
                    
                    <ProgressBar className='danger'  variant="warning" now={80} />

                    </li>
                    </ul>
                    
                    </div>


             
              </Col>

              
            </Row>                         
          </div>



    </Container>
  )
}

export default Resume