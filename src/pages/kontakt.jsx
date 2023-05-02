import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function kontakt() {
  return (
    <main>
      <div>
        <h1>Kontakta oss</h1>

        <h3>Gabriel Petersson</h3>
        <p>Email: gabriel@littleland.se</p>

        <h3>Adam Holgersson</h3>
        <p>Email: adam.holgersson@hotmail.se</p>

        <h3>Samuel Ahlvin</h3>
        <p>Email: ahlvinsamme@gmail.com</p>

        <h3>Elias Daoud</h3>
        <p>Email: el12938d@gmail.com</p>

        <InputGroup>
          <InputGroup.Text>Skicka ett meddeland till oss</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Button>Skicka</Button>

      </div>
    </main>
  )
}

