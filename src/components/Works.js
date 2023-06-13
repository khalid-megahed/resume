import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img1 from "../imges/1.jpg"
import img2 from "../imges/2.jpg"
import img3 from "../imges/3.jpg"
import img4 from "../imges/4.jpg"
import img5 from "../imges/5.jpg"
import img7 from "../imges/7.jpg"
import img8 from "../imges/8.jpg"
import "./Works.css"
const Works = () => {
  return (
   <div className='works '>  
          <h5>CHECK OUT SOME OF MY WORKS.</h5>


     <Container className='head'>
      <Row className='bg'>
        <Col  lg={3} md={6} sm={12}  >

        <Card style={{width:"auto"}} >
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
      </Card.Body>
    </Card>
        </Col>
        <Col  lg={3} md={6} sm={12} >

<Card  style={{width:"auto"}}>
<Card.Img variant="top"  src={img2} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


<Col  lg={3} md={6} sm={12} >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img3} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


<Col  lg={3} md={6} sm={12} >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img4} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


<Col lg={3} md={6} sm={12} >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img5} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


<Col   lg={3} md={6} sm={12} >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img8} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


<Col   lg={3} md={6} sm={12} >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img7} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


<Col  lg={3} md={6} sm={12}   >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img8} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>
<Col  lg={3} md={6} sm={12}   >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img1} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>
<Col  lg={3} md={6} sm={12}   >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img2} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>

<Col  lg={3} md={6} sm={12}   >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img3} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>
<Col  lg={3} md={6} sm={12}   >

<Card style={{width:"auto"}}>
<Card.Img variant="top" src={img4} />
<Card.Body>
<Card.Title>Card Title</Card.Title>

</Card.Body>
</Card>
</Col>


      </Row>
    </Container>
   </div>
  )
}

export default Works