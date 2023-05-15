import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

// The modal and form displayed when editing users
function ModalComponent({ show, setShow, handleClose, userObject, setUserObject, currentUser, handleSaving, setUsers }) {

  // Handles the change of the username when editing
  const handleUserNameChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      username: event.target.value
    }))
  }
  // Handles the change of the firstname when editing
  const handleFirstNameChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      firstname: event.target.value
    }))
  }

  // Handles the change of the lastname when editing
  const handleLastNameChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      lastname: event.target.value
    }))
  }

  // Handles the change of the social secutiry number when editing
  const handleSsnChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      ssn: event.target.value
    }))
  }

  // Handles the change of the phone number when editing
  const handlePhoneChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      phone: event.target.value
    }))
  }

  // Handles the change of the e-mail address when editing
  const handleEmailChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      email: event.target.value
    }))
  }

  // Handles the change of the age when editing
  const handleAgeChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      age: event.target.value
    }))
  }

  // Handles the change of the address when editing
  const handleAddressChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      address: event.target.value
    }))
  }

  // Handles the change of the city when editing
  const handleCityChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      city: event.target.value
    }))
  }

  // Handles the change of the postal code when editing
  const handlePostalChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      postal: event.target.value
    }))
  }

  // Handles the change of the role when editing
  const handleRoleChange = event => {
    setUserObject((prevState) => ({
      ...prevState,
      role: event.target.value
    }))
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Redigera
        </Modal.Title>
      </Modal.Header>
      {currentUser ? (
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form-Label>Användarnamn</Form-Label>
              <Form.Control value={userObject.username} onChange={handleUserNameChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Namn</Form-Label>
              <Form.Control value={userObject.firstname} onChange={handleFirstNameChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Efternamn</Form.Label>
              <Form.Control value={userObject.lastname} onChange={handleLastNameChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>PersonNr</Form-Label>
              <Form.Control value={userObject.ssn} onChange={handleSsnChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Telefon</Form-Label>
              <Form.Control value={userObject.phone} onChange={handlePhoneChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Email</Form-Label>
              <Form.Control value={userObject.email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Ålder</Form-Label>
              <Form.Control value={userObject.age} onChange={handleAgeChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Adress</Form-Label>
              <Form.Control value={userObject.address} onChange={handleAddressChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Stad</Form-Label>
              <Form.Control value={userObject.city} onChange={handleCityChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>PostNr</Form-Label>
              <Form.Control value={userObject.postal} onChange={handlePostalChange} />
            </Form.Group>
            <Form.Group>
              <Form-Label>Roll</Form-Label>
              <Form.Control value={userObject.role} onChange={handleRoleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
      ) : (
        <Modal.Body>Loading...</Modal.Body>
      )}
      <Modal.Footer>
        <Button variant='dark' onClick={handleClose}>Close</Button>
        <Button variant='dark' onClick={() => handleSaving(userObject, setShow, setUsers)}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent