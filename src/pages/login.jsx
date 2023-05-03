import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import './login.css'

export default function login() {
  return (
    <main>
      <div>
        <h1>Vänligen ange användarnamn and lösenord</h1>

        <h2>Användarnamn</h2>
        <input type="text" placeholder="Användarnamn" />

        <h2>Lösenord</h2>
        <input type="text" placeholder="Lösenord" />

        <div className='loginButton'>
          <Button >Logga in</Button>
        </div>

        <div className='glömtButton'>
          <Button >Glömt dina uppgifter?</Button>
        </div>

        <div className='inteRegistrerad'>
          <h4>Inte registrerad ?</h4>

          <Link to={{
            pathname: "/register",

          }}>
            <Button>Registrera</Button>
          </Link>
        </div>


      </div>
    </main>
  )
}
