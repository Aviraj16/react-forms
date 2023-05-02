import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, Fragment } from 'react'
import Header from '../Header/Header';

const Login = () => {

  const [formData, updateData] = useState({
    email: '',
    password: '',
    checkMeOut: ''
  })

  const onChanegHandler = (event: any) => {
    updateData((prev: any) => {
      return {...prev, [event.target.name]:event.target.value}
    })

  }

  return (
    <Fragment>
      <Header />
      <Form style={{ width: "50%", background: "aquamarine", padding: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={onChanegHandler} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' value={formData.password} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" name='email' value={formData.checkMeOut} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  )
}

export default Login