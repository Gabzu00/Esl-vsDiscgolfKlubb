import "bootstrap/dist/css/bootstrap.min.css";
import './register.css'
import React, { useState } from "react";
import Button from "react-bootstrap/Button"

export default function register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRepeatPasswordChange(event) {
    setRepeatPassword(event.target.value);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSocialSecurityNumberChange(event) {
    setSocialSecurityNumber(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handlePostalCodeChange(event) {
    setPostalCode(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username,
      password,
      repeatPassword,
      firstName,
      lastName,
      socialSecurityNumber,
      address,
      city,
      postalCode,
      phone,
      email,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful!');
      } else {
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <div>
        <h1 className="rubrik">Vänligen ange dina uppgifter</h1>

        <h2 className="hello">Användarnamn</h2>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={handleUsernameChange}
        />

        <h2>Lösenord</h2>
        <input
          type="text"
          placeholder="Lösenord"
          value={password}
          onChange={handlePasswordChange}
        />

        <h2>Upprepa lösenord</h2>
        <input
          type="text"
          placeholder="Upprepa"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />

        <h2>Förnamn</h2>
        <input
          type="text"
          placeholder="Förnamn"
          value={firstName}
          onChange={handleFirstNameChange}
        />

        <h2>Efternamn</h2>
        <input
          type="text"
          placeholder="Efternamn"
          value={lastName}
          onChange={handleLastNameChange}
        />

        <h2>Personnummer</h2>
        <input
          type="text"
          placeholder="Personnummer"
          value={socialSecurityNumber}
          onChange={handleSocialSecurityNumberChange}
        />

        <h2>Address</h2>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={handleAddressChange}
        />

        <h2>Stad</h2>
        <input type="text"
          placeholder="Stad"
          value={city}
          onChange={handleCityChange} />

        <h2>Postnummer</h2>
        <input type="text"
          placeholder="Postnummer"
          value={postalCode}
          onChange={handlePostalCodeChange}
        />

        <h2>Telefon</h2>
        <input type="text"
          placeholder="Telefon"
          value={phone}
          onChange={handlePhoneChange}
        />

        <h2>Email</h2>
        <input type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <div className="registerButton" onClick={handleSubmit}>
          <Button>
            Registrera
          </Button>
        </div>



        <div className='ålder'>
          <h2>Junior/Senior</h2>
          <h4>Om du är junior (under 18) blir du medlem i klubben till ett lägre pris</h4>

          <div className='input1'>
            <input className='box' type="checkbox" id="demoCheckbox" name="checkbox" value="1" />
            <label for="demoCheckbox">Jag är under 18 gammal</label>
          </div>

          <div className='input1'>
            <input className='box' type="checkbox" id="demoCheckbox" name="checkbox" value="1" />
            <label for="demoCheckbox">Jag är över 18 år gammal</label>
          </div>

        </div>

      </div>
    </main>
  )
}
