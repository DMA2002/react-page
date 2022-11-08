import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Patient.css"

function Option  ()  {
  return (
    <div className='patient'>
            <div className='center'>
                <div className='servi'>
                    <div className='patient1' >
                        <div className='patient11'>
                            <div className='dec'></div>
                            <div className='n'>
                                <Link className='titre' to="/pathologie">
                                    Enregistrer vos pathologie

                                </Link>
                              
                            </div>
                        </div>
                        
                    </div>
                    <div className='patient2'>
                        <div className='patient21'>
                            <div className='dec'></div>
                            <div className='n'>
                                <Link className='titre' >
                                    Scanner examen

                                </Link>
                            </div>
                        </div>
                      
                    </div>
                    <div className='patient3'>
                        <div className='patient31'>
                            <div className='dec'>

                            </div>
                            <div className='n'>
                                <Link className='titre' to="/planing">
                                    Programmer vos rendez-vous
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className='patient4'>
                            <div className='patient41'>
                                <div className='dec'>

                                </div>
                                <div className='n'>
                                    <Link className='titre' to="/history">
                                        Voir historique
                                    </Link>
                                </div>
                            </div>
                                                   
                    </div> 

                </div>
            </div>      
    </div>
  )
}

export default Option