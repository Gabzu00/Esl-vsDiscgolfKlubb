import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from 'react-bootstrap/InputGroup';


export default function register() {
  return (
    <div>
      <h2>Användarnamn</h2>
      <input type="text" placeholder="Användarnamn" />

      <h2>Lösenord</h2>
      <input type="text" placeholder="Lösenord" />

      <h2>Upprepa lösenord</h2>
      <input type="text" placeholder="Lösenord" />

      <h2>Förnamn</h2>
      <input type="text" placeholder="Lösenord" />

      <h2>Efternamn</h2>
      <input type="text" placeholder="Lösenord" />

      <h2>Personnummer</h2>
      <input type="text" placeholder="Lösenord" />

      <h2>Address</h2>
      <input type="text" placeholder="Address" />

      <h2>Stad</h2>
      <input type="text" placeholder="Stad" />

      <h2>Postnummer</h2>
      <input type="text" placeholder="Postnummer" />

      <h2>Telefon</h2>
      <input type="text" placeholder="Telefon" />

      <h2>Email</h2>
      <input type="text" placeholder="Email" />

      <h2>Junior/Senior</h2>
      <h4>Om du är junior (under 18) blir du medlem i klubben till ett lägre pris</h4>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <h4>Jag är under eller 18 år gammal</h4>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <h4>Jag är äldre än 18</h4>
      </InputGroup>



    </div>
  )
}
