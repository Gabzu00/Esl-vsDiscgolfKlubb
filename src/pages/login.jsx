import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';

export default function login() {
  return (
    <main>
      <div>
        <h1>Vänligen ange användarnamn och lösenord</h1>

        <h2>Användarnamn</h2>
        <input type="text" placeholder="Användarnamn" />

        <h2>Lösenord</h2>
        <input type="text" placeholder="Lösenord" />

        <Button>Login</Button>

        <Button>Glömt Lösenord eller Användarnamn?</Button>

        <h4>Inte registrerad</h4>

        <Link to={{
          pathname: "/register",

        }}>
          <Button>Registrera</Button>
        </Link>

      </div>
    </main>
  )
}
