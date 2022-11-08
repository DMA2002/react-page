import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Connect.css"


function Connect() {
  return (
    <div className='connect'>
        <div className='secour'>
          
        </div>
        <div className='saisi'>
          <center><p>Se connection</p></center>
          <div className='user'>
              <input type="text" name="nom" placeholder='Nom' />
              <i className='fa-solid fa-user'></i>
          </div>
          <div className='user'>
            <input type="password" name="mot" placeholder='Mot de passe' />
            <i class="fa-solid fa-lock"></i>
          </div><br /><br /><br />
          <center><Link className='button' to="/history">Connection</Link></center>
        
        </div>
    </div>
  )
}

export default Connect
