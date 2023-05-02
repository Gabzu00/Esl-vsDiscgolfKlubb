import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './register.css'

export default function register() {
  return (
    <main>
      <div>
        <h1 className='rubrik'>Vänligen ange dina uppgifter</h1>

        <h2 className='hello'>Användarnamn</h2>
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
