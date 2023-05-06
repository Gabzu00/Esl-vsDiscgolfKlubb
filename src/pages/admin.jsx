import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './admin.css'

function Admin() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users', {
      method: 'GET',
      crossorigin: true,
    }).then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
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
      </table>
    </main>
  )
}

export default Admin;
