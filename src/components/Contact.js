import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


import * as formik from 'formik';
import * as yup from 'yup';
import "./Contact.css"
import SendAndArchiveSharpIcon from '@mui/icons-material/SendAndArchiveSharp';
import { Link } from 'react-router-dom';

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
  <div className='bg-contact  contact'>
     <Container >

<div >
  <div className='row'>
    <Col  lg={2} md={12} className='col-2'>
    <h1  ><SendAndArchiveSharpIcon/></h1>
    </Col>
    <Col  lg={8} md={12}>
      <h5>Here is where you should write your message to readers to have them get in contact with you.</h5>
    </Col>
    
  </div>
</div>

      <div className='row'>
        <Col lg={8} md={12}  >
        <Formik
validationSchema={schema}
onSubmit={console.log}
initialValues={{
firstName: 'Mark',
lastName: 'Otto',
username: '',
city: '',
state: '',
zip: '',
terms: false,
}}
>
{({ handleSubmit, handleChange, values, touched, errors }) => (
<Form noValidate onSubmit={handleSubmit}>

<Form.Group as={Col} md="8" controlId="validationFormik01">
<Form.Label>First name</Form.Label>
<Form.Control
  type="text"
  name="firstName"
  value={values.firstName}
  onChange={handleChange}
  isValid={touched.firstName && !errors.firstName}
/>
<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="8" sm="12" controlId="validationFormik02">
<Form.Label>Last name</Form.Label>
<Form.Control
  type="text"
  name="lastName"
  value={values.lastName}
  onChange={handleChange}
  isValid={touched.lastName && !errors.lastName}
/>

<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
</Form.Group>


<Form.Group as={Col} md="8" controlId="validationFormikUsername">
<Form.Label>Username</Form.Label>
<InputGroup hasValidation>
  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
  <Form.Control
    type="text"
    placeholder="Username"
    aria-describedby="inputGroupPrepend"
    name="username"
    value={values.username}
    onChange={handleChange}
    isInvalid={!!errors.username}
  />
  <Form.Control.Feedback type="invalid">
    {errors.username}
  </Form.Control.Feedback>
</InputGroup>
</Form.Group>


<Form.Group as={Col} md="8" controlId="validationFormik03">
<Form.Label>City</Form.Label>
<Form.Control
  type="text"
  placeholder="City"
  name="city"
  value={values.city}
  onChange={handleChange}
  isInvalid={!!errors.city}
/>

<Form.Control.Feedback type="invalid">
  {errors.city}
</Form.Control.Feedback>
</Form.Group>
<Form.Group as={Col} md="4"   controlId="validationFormik04">
<Form.Label>State</Form.Label>
<textarea id="w3review" name="w3review" rows="4" style={{height:"400px"}} cols="58"></textarea>
<Form.Control.Feedback type="invalid">
  {errors.state}
</Form.Control.Feedback>
</Form.Group>


<Button type="submit">SUBMIT </Button>
</Form>
)}
</Formik>
        </Col>
        <Col lg={4} md={12} className=' address'>
          <div className='row'>
          <h5>Address and Phone</h5>
          <span>Nordic-Giant Project</span>
          <span>(Your Street)</span>
          <span>(Your City), (Your State) (Your Zip/Postal Code)</span>
          <span>555-555-5555</span>
          </div>
        <div >
          <h5>Latest Tweets</h5>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum <Link> http://t.co/CGIrdxIlI3 </Link>
              2 Days Ago</p>



            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <Link> http://t.co/CGIrdxIlI3 </Link>
                3 Days Ago</p>

        </div>
        </Col>
      </div>


</Container>
  </div>
  );
}

export default FormExample;