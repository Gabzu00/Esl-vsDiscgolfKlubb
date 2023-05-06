import React from 'react'
import './footer.css'

export default function footer() {


  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* col-1 */}
          <div className='col'>
            <h4>Eslövs Discgolf Klubb</h4>
            <ul className='list-unstyled'>
              <li>0727492439</li>
              <li>Eslöv Sverige</li>
              <li>Odengatan 46</li>
            </ul>
          </div>
          {/* col-2 */}
          <div className='col'>
            <h4>Kontaktpersoner</h4>
            <ul className='list-unstyled'>
              <li>Bosse</li>
              <li>Bob</li>
              <li>Bill</li>
            </ul>
          </div>
          {/* col-3 */}
          <div className='col'>
            <h4>Speltider</h4>
            <ul className='list-unstyled'>
              <li>Tisdagar 18:00 (Sommartid)</li>
              <li>Söndagar 10:00 (året runt)</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Eslövs Discgolf Klubb | All rights reserved | Terms of service | Privacy
          </p>

        </div>
      </div>

    </div>
  )
}