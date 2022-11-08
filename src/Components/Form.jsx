import React from 'react'
import "../Style/form.css"
import log from "../Images/log.svg"
import { Link } from 'react-router-dom'
const Form = () => {
  return (
    <div className='form'>
      <div className='design'>
        <p className='bien'>Bienvenue</p>
        <img src={log} alt="" />
        <p className='ben'>Ma santé mobile est un site web qui vous permet de vous deplacez avec vos informations de santé en toute securité et vous aide en cas d'accident</p>
      </div>
      <div className='champ'>
        <form>
            <div className='user'>
                <input type="text" name="nom" placeholder='Nom' />
                <i className='fa-solid fa-user'></i>
            </div>
            <div className='user'>
                <input type="text" name="prenom" placeholder='Prenom' />
                <i className='fa-solid fa-user'></i>
            </div>
            <div className='user'>
                <input type="text" name="telephone" placeholder='Téléphone' />
                <i class="fa-solid fa-phone"></i>
            </div>
            <div className='user'>
                <input type="date" name="date" placeholder='Date de naissance' />
            </div>  
            <div className='user'>
              <select>
                <option value="Feminin">Feminin</option>
                <option value="Masculin">Masculin</option>
              </select>
            </div>    
            
            <div className='user'>
                <input type="text" name="nation" placeholder='Nationalité' />
                <i class="fa-solid fa-flag"></i>
            </div>
            <div className='user'>
                <input type="text" name="lieu" placeholder='Lieu dhabitation' />
                <i class="fa-solid fa-location-dot"></i>
            </div>
            
            <div className='user'>
                <input type="password" name="mot" placeholder='Mot de passe' />
                <i class="fa-solid fa-lock"></i>
            </div>
            <div className='user'>
                <input type="password" name="cmot" placeholder='Confirmer le mot de passe' />
                <i class="fa-solid fa-lock"></i>
            </div>
            <center><button>S'inscrire</button></center>
            <Link className='lien' to="/connecter">Se connecter</Link>
        </form>

      </div>
    </div>
  )
}

export default Form
