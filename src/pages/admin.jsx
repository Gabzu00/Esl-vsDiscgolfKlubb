import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './admin.css'
import { Table, Button, Collapse, Modal, Form } from 'react-bootstrap'
import ModalComponent from '../components/ModalComponent';

// Make this variable 'http://localhost:3000' when in dev environment
// Make empty ('') before pushing/merging
const DEV_VARIABLE = 'http://localhost:3000'

function Admin() {
  const [users, setUsers] = useState([])    // Users that are listed
  const [openUser, setOpenUser] = useState(null)    // The user currently open (more)
  const [showModal, setShowModal] = useState(false)   // Variable used to handle modal
  const [currentUser, setCurrentUser] = useState(null)    // A "fake" user representing the user being edited

  // An object that had identical attributes to the user currently selected.
  // This object will have its attributes changed when editing users.
  // The changed attributes will then be pushed to the real user when saving them.
  const [userObject, setUserObject] = useState({
    id: currentUser?._id || '',
    userName: currentUser?.userName || '',
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    ssn: currentUser?.socialSecurityNumber || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || '',
    age: currentUser?.age || '',
    address: currentUser?.address || '',
    city: currentUser?.city || '',
    postal: currentUser?.postalCode || '',
    role: currentUser?.role || ''
  })

  // Updates the "fake" user attributes when a new user is selected
  useEffect(() => {
    updateUserAttributes()
  }, [currentUser]);

  // Gets all users when the page is loaded
  useEffect(() => {
    getUsers(setUsers)
  }, []);

  // Updates the "fake user" attributes to that of the selected user
  function updateUserAttributes() {
    setUserObject({
      id: currentUser?._id || '',
      username: currentUser?.userName || '',
      firstname: currentUser?.firstName || '',
      lastname: currentUser?.lastName || '',
      ssn: currentUser?.socialSecurityNumber || '',
      phone: currentUser?.phone || '',
      email: currentUser?.email || '',
      age: currentUser?.age || '',
      address: currentUser?.address || '',
      city: currentUser?.city || '',
      postal: currentUser?.postalCode || '',
      role: currentUser?.role || ''
    })
  }

  // Handles closing the modal
  const handleClose = () => {
    updateUserAttributes()
    setShowModal(false)
  }

  // Handles opening and displaying correct information the modal
  const handleShow = (user) => {
    setCurrentUser(user)
    setShowModal(true)
  }

  return (
    <main>
      <div className='tet'>
        <Table className='userTable w-auto' size='sm'>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Efternamn</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <React.Fragment key={user._id + '-1'}>
                <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td><Button className='button' variant='dark' size='sm' onClick={
                    () => handleRemoveUser(user._id, user.firstName, user.lastName, user.userName, setUsers)}>Ta bort</Button></td>
                  <td><Button className='button' variant='dark' size='sm' onClick={
                    () => handleShow(user)}>Redigera</Button></td>
                  <td><Button className='button' variant='dark' size='sm' onClick={
                    () => handleMore(user._id, setOpenUser)}>Mer</Button></td>
                </tr>
                <Collapse in={openUser === user._id}>
                  <tr key={user._id + '-collapse'}>
                    <td>
                      <strong>PersonNr:</strong><br />
                      {user.socialSecurityNumber}<br />
                      <strong>Telefon:</strong><br />
                      {user.phone}<br />
                      <strong>Roll:</strong><br />
                      {user.role}<br />
                      <strong>Ålder:</strong><br />
                      {user.age}<br />
                      <strong>Postkod:</strong><br />
                      {user.postalCode}<br />
                      <strong>Adress:</strong><br />
                      {user.address}<br />
                      <strong>Stad:</strong><br />
                      {user.city}<br />
                      <strong>Användarnamn:</strong><br />
                      {user.userName}<br />
                    </td>
                  </tr>
                </Collapse>
              </React.Fragment>
            ))}
            <ModalComponent
              show={showModal}
              setShow={setShowModal}
              handleClose={handleClose}
              userObject={userObject}
              setUserObject={setUserObject}
              currentUser={currentUser}
              handleSaving={handleSaving}
              setUsers={setUsers}
            />
          </tbody>
        </Table>
      </div>
    </main>
  )
}

// Handles saving the information that was edited and actually sending
// the request to the database
function handleSaving(userObject, setShow, setUsers) {
  setShow(false)

  // Adds some options in a variable
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    crossorigin: true,
    body: JSON.stringify({
      _id: userObject.id,
      userName: userObject.username,
      firstName: userObject.firstname,
      lastName: userObject.lastname,
      socialSecurityNumber: userObject.ssn,
      phone: userObject.phone,
      email: userObject.email,
      age: userObject.age,
      address: userObject.address,
      city: userObject.city,
      postal: userObject.postal,
      role: userObject.role
    })
  }

  fetch(DEV_VARIABLE + `/users/${userObject.id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data
    })

  getUsers(setUsers)
}

// Gets a user based on id and removes them from the database
function handleRemoveUser(id, firstname, lastname, username, setUsers) {
  // Displays a confirmation box before doing anything
  const remove = confirm(`Är du säker?\n${firstname} ${lastname} med användarnamnet ${username} kommer tas bort för evigt.\nDetta går inte att ångra.`)

  // Only deletes the user if the user confirms in the confirmation box
  if (remove) {
    fetch(DEV_VARIABLE + `/users/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      crossorigin: true,
    }).then(response => {
      return response.json()
    }).then(() => {
      updateUsers(setUsers)
    })
  } else {
    return
  }
}

// Updates the list of users with the current information
function updateUsers(setUsers) {
  fetch(DEV_VARIABLE + '/users', {
    method: 'GET',
    crossorigin: true,
  }).then(response => response.json())
    .then(data => setUsers(data))
}

// Handles the "more" button
function handleMore(userId, setOpenUser) {
  setOpenUser(userId)
}

// Gets all users from the database
function getUsers(setUsers) {
  fetch(DEV_VARIABLE + '/users', {
    method: 'GET',
    crossorigin: true,
  }).then(response => response.json())
    .then(data => setUsers(data));
}

export default Admin;
