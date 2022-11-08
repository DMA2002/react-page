import React from 'react'
import "../Style/Footer.css"
import logo from "../Images/masan.svg"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
             <div className='footer'>
                 {/* <div className='footer1'>
                     <img src={logo} alt="" />
                 </div> */}
                 <div className='footer2'>
                     <p>Nos services</p>
                
                     <Link className='items' to="#">Secour</Link>
                     <Link className='items' to="#">Enregister pathologie</Link>
                     <Link className='items' to="#">Scanner un examen</Link>
                     <Link className='items' to="#">Programmer un rendez-vous</Link>
                     <Link className='items' to="#">Voir historique</Link>
                 </div>
                 <div className='footer2'>
                     <Link className='items' to="/">Accueil</Link>
                     <Link className='items' to="#">Patient</Link>
                     <Link className='items' to="#">Secouriste</Link>
                     <Link className='items' to="/login">Se connecter</Link>
                 </div>

             </div>
         </div>
    )
}

export default Footer
