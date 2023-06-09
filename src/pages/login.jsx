import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit'
import './login.css'

export default function login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();

  useEffect(() => {
    setUserName('');
    setPassword('');
    setIsLoggedIn(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });
      if (response.ok) {
        //Successful login
        const token = await response.json();
        signIn({
          token: token.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { username: userName, role: token.role, payDate: token.payDate }
        })
        setIsLoggedIn(true);
        navigate('/')
      }
      else {
        alert("Fel användarnamn eller lösenord")
      }
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <main>
      <div>
        {isAuthenticated() ? (
          <div>
            <h2>Du är inloggad som {auth().username}.</h2>
            <h2>Medlemskap: {auth().role}</h2>
            <h2>Senaste betalning: {new Date(auth().payDate).toLocaleDateString("sv-SE", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</h2>
          </div>
        ) : (
          <div>
            <h1>Vänligen ange användarnamn och lösenord</h1>
            <form onSubmit={handleSubmit}>
              <h2>Användarnamn</h2>
              <label>
                <input type="text" placeholder="Användarnamn" value={userName} onChange={(input) => setUserName(input.target.value)} />
              </label>
              <h2>Lösenord</h2>
              <label>
                <input type="password" placeholder="Lösenord" value={password} onChange={(input) => setPassword(input.target.value)} />
              </label>
              <div>
                <Button className="loginBtn" variant="dark" type="submit">Logga in</Button>
              </div>
            </form>
            <h4>Inte registrerad?</h4>

            <Link to={{
              pathname: "/register",

            }}>
              <Button variant="dark">Registrera</Button>
            </Link>

          </div>)}
      </div>
    </main>
  )
}
