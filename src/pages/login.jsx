import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });
      const user = await response.json();
      console.log(user);
      if (user.userName == userName && user.password == password) {
        localStorage.setItem('user', JSON.stringify(user));
        setIsLoggedIn(true);
        console.log(isLoggedIn);
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
        {isLoggedIn ? (
          <h2>Du är inloggad som {JSON.parse(localStorage.getItem('user')).userName}.</h2>
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
              <Button type="submit">Logga in</Button>
            </form>

            <Button>Glömt Lösenord eller Användarnamn?</Button>

            <h4>Inte registrerad?</h4>

            <Link to={{
              pathname: "/register",

            }}>
              <Button>Registrera</Button>
            </Link>

          </div>)}
      </div>
    </main>
  )
}
