import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './admin.css'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'

// Make this variable 'http://localhost:3000' when in dev environment
// Make empty ('') before pushing/merging
const DEV_VARIABLE = 'http://localhost:3000'

function Admin() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(DEV_VARIABLE + '/users', {
      method: 'GET',
      crossorigin: true,
    }).then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  console.log(users)

  return (
    <main>
      <Table className='userTable'>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.userName}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td><Button variant='dark' onClick={() => handleRemoveUser(user._id)}>Remove</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  )
}

// Gets a user based on id and removes them from the database
function handleRemoveUser(id) {
  fetch(DEV_VARIABLE + `/users/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    crossorigin: true,
  }).then(response => {
    console.log('RESPONSE', response)
    return response.json()
  })
}

export default Admin;
