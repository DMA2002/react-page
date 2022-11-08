import React from 'react'
import "../Style/Planing.css"

function Rendez() {
  return (
   <center>
     <div className='planing'>
        <p className='intro'>Qu'est ce que vous avez?</p>
        <div className='user'>
            <label htmlFor="nam">Date du rendez vous medical</label>
            <input type="date" name='na' />
        </div>
        <div className='user'>
            <input type="text" placeholder='Objet' />
        </div>
        <div className='user'>
            <label htmlFor="na">Date du rappel</label>
            <input type="Date" name='na' />
        </div>
        <button>Programmer</button>
      
    </div>
   </center>
  )
}

export default Rendez
