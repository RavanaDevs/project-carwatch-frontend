import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import '../App.css'
import '../components/css/components.css'
import './css/profile-edit.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../axiosConfig'

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    username: '',
    group: '',
    nickname: '',
    engine: '',
    ODO: '',
    chasses: '',
    runtime: '',
    model: '',
    maxSpeed: '',
  })

  useEffect(() => {
    const getData = async () => {
      const profile = await axios.get('/api/profile', {
        params: { id: '663efc15aa4dbc71275ba4ea' },
      })

      setFormData(profile.data)
    }
    getData()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updateData = async () => {
      const response = await axios.put('/api/profile', formData, {
        params: { id: '663efc15aa4dbc71275ba4ea' },
      })
      console.log(response)
    }
    updateData()
  }
  return (
    <>
      <NavBar />
      <Container className='body-container d-flex'>
        <SideBar />
        <div className='dash-body p-2'>
          <div className='profile-container bg-light p-4'>
            <Form onSubmit={handleSubmit}>
              <Row>
                <h2>Edit Profile</h2>
                <Col sm={6}>
                  <Form.Group controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter username'
                      name='username'
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId='group'>
                    <Form.Label>Vehicle</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter group'
                      name='group'
                      value={formData.group}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Form.Group controlId='nickname'>
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter nickname'
                      name='nickname'
                      value={formData.nickname}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId='engine'>
                    <Form.Label>Engine</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter engine'
                      name='engine'
                      value={formData.engine}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Form.Group controlId='ODO'>
                    <Form.Label>ODO</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter ODO'
                      name='ODO'
                      value={formData.ODO}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId='chasses'>
                    <Form.Label>Chasses</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter chasses'
                      name='chasses'
                      value={formData.chasses}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <Form.Group controlId='runtime'>
                    <Form.Label>Transmission</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter runtime'
                      name='runtime'
                      value={formData.runtime}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId='model'>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter model'
                      name='model'
                      value={formData.model}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <Form.Group controlId='maxSpeed'>
                    <Form.Label>Max Speed</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter max speed'
                      name='maxSpeed'
                      value={formData.maxSpeed}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button className='mt-2' variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ProfileEdit
