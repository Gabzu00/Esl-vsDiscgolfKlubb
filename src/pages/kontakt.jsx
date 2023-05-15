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


      </div>
    </main>
  )
}

