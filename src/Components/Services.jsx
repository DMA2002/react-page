import React from 'react'
import "../Style/Services.css"

function Services() {
    return (
        <div className='parent'>
            <div className='nom'>
                <p className='patient'>Services patient</p>
            </div>
            <div className='center'>
                <div className='services'>
                    <div className='service1' >
                        <div className='service11'>
                            <div className='deco'> </div>
                            <div className='no'>
                                <p>Enregistrer vos pathologie</p>
                            </div>
                        </div>
                        <div className='service12'>
                            <p>Se service permet au patient d'enregistrer ses pathologies comme le diabète, la tension et autre.
                            Il permet aussi après une consultation d'enregistrer son diagnostique
                            </p>
                        </div> 
                    </div>
                    <div className='service2'>
                        <div className='service21'>
                            <div className='deco'></div>
                            <div className='no'>
                                <p>Scanner examen</p>
                            </div>
                        </div>
                        <div className='service22'>
                            <p>Ici le patient a la possibilité de scanner ses examens pour mieux les conservés et les avoir en tout lieu</p>
                        </div>
                    </div>
                    <div className='service3'>
                        <div className='service31'>
                            <div className='deco'>

                            </div>
                            <div className='no'>
                                <p>Programmer vos rendez-vous</p>
                            </div>
                        </div>
                        <div className='service32'>
                            <p>Ce service vous permet de programmer vos rendez-vous medical pour avoir un rappel du rendez-vous</p>
                        </div>
                    </div>
                    <div className='service4'>
                            <div className='service41'>
                                <div className='deco'>

                                </div>
                                <div className='no'>
                                    <p>Voir historique</p>
                                </div>
                            </div>
                            <div className='service42'>
                                <p>Voir historique vous permet de voir tout ce que vous avez enregistrer dans ce site vos examen, vos pathologies et autre.</p>  
                            </div>                         
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default Services

