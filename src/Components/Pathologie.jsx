import React from 'react'
import "../Style/Pathologie.css"

function Pathologie() {
  return (
    <center>
        <div className='pathologie'>
            <form action="">
                <p className='intro'>Qu'est ce que vous avez?</p>
                <div className='user'>
                    <input type="date" />
                </div>
                <div className='user'>
                    <input type="text" placeholder='Quel est votre maladie?' />
                </div>
                <div className='user'>
                    <input type="text" placeholder='Description ou symptomes' />
                </div>
                <div className='user'>
                    <input type="text" placeholder='Medicaments associé ' />
                </div>
                <div className='user'>
                    <label htmlFor="text">Qu'avez vous d'autre</label><br />
                    <textarea name="text" id="" cols="30" rows="10"  ></textarea>
                </div>
                <button>Enregistrer</button>
       
            </form>
        </div>
    </center>
  )
}

export default Pathologie
