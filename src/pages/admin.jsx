import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './admin.css'
import { Container, Row, Col, Table } from 'react-bootstrap'

function Admin() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users', {
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
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  )
}

export default Admin;
