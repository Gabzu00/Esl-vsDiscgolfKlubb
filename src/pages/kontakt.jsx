import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './kontakt.css'

export default function kontakt() {
  return (
    <main>
      <div>
        <h2 className='kontakt'>Kontakta oss</h2>

        <h3>Gabriel Petersson</h3>
        <p>Email: gabriel@littleland.se</p>

        <h3>Adam Holgersson</h3>
        <p>Email: adam.holgersson@hotmail.se</p>

        <h3>Samuel Ahlvin</h3>
        <p>Email: ahlvinsamme@gmail.com</p>


        <h3>During the project we have worked a lot with Jira. There we assigned the different tasks that we
          had to work on. Through monday to friday we had meetings about what had been done and what do to next. We also discussed and went
          through how we solved the prblems that we faced so that everyone in the team understood what was going on.
          Each member of the group dident really have a focus area. Each member worked eaqually as much on the frontend as the
          backend.
        </h3>

        <h2>What we have done</h2>
        <h3>Gabriel</h3>
        <p>Register users, Page for login/register, Frontend - Banor, Frontend - Kontakt/About, Frontend - Footers, Change backend files for the database (test), Google translate, Bcrypt</p>

        <h3>Adam</h3>
        <p>Fix nodemon/express server, Styling, Render, Frontend - Start/Hem, Admin Dashboard (CRUD operations)</p>

        <h3>Samuel</h3>
        <p>Database API, Login users, Logout users, Authentication, Backend - Database, Admins can see a list of members, Access control, Page for members to see information about their membership, Frontend - Headers (NavBar)</p>
      </div>
    </main>
  )
}

