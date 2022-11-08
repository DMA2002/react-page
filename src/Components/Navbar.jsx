import React,{useState, useEffect} from 'react'
import "../Style/Style1.css"
import masante from "../Images/masan.svg"
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        
       <nav>
                        <div className='liste'>
                             
                            <div className='enfant1'>
                                <img src={masante} alt="" />
                            </div>
                            <div className='enfant2'>
                                
                                <Link className='items' to="/">Accueil</Link>
                                <Link className='items' to="/patient">Patient</Link>
                                <Link className='items' to="/connection">Secouriste</Link>
                                <Link className='items' to="/login">Se connecter</Link>
                            </div>
                                
                        </div>    
         
        </nav>
    )
}  



export default Navbar
