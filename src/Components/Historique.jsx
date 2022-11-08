import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Style/History.css"
import isto from "../Images/isto.png"


const Historique = () => {


    return (
        <div>
             <div>
                  
             </div>
             <div className="category_div">
                  <div className='cat_titre'>
                       Liste des articles
                  </div>
                  <div className="category_element">
                       <div className="category_nb">
                            <p>Afficher</p>
                            <select name="" id="">
                                 <option value="10">10</option>
                                 <option value="20">20</option>
                                 <option value="50">50</option>
                                 <option value="100">100</option>
                            </select>
                       </div>
                       <div className="category_search">
                            <input type="search" name="" id="" />
                            <button>Rechercher</button>
                       </div>
                     
                  </div>
                  <div className="category_liste">
                       <table className='table'>
                            <thead>
                                 <tr>
                                      <th className='id_product'>Date</th>
                                      <th className='image_prod'>Image examen</th>
                                      <th className='qtn_prod'>Image ordonnnance</th>
                                      <th className='nom_product'>Nom maladie</th>
                                      <th>Description</th>
                                      <th className='prix_prod'>Medicament</th>
                                      
                                      <th colSpan="2" className='action_button'>Action</th>
                                 </tr>
                            </thead>
                            <tbody className='tbody'>
                                 
                                                
                                           <tr>
                                                <td>07/11/2022</td>
                                                <td>
                                                     <div className='image_div'>
                                                          <img src={isto} alt="" />
                                                     </div>
                                                </td>
                                                <td className='nom_prod'>
                                                    <div className='image_div'>
                                                        <img src={isto} alt="" />
                                                     </div>
                                                </td>
                                                <td>
                                                     Paludisme
                                                </td>
                                                <td>
                                                      corps chaud, mal de tete, diarrhée
                                                </td>
                                                <td>Artefan, paracetamol</td>
                                                
                                                <td>
                                                     <div className="">
                                                         <button>Modifier</button> 
                                                     </div>
                                                </td>
                                                <td>
                                                     <button className='sup'>Supprimer</button>
                                                </td>
                                           </tr>
                            </tbody>
                            <tbody className='tbody'>
                                 
                                                
                                           <tr>
                                                <td>12/10/2022</td>
                                                <td>
                                                     <div className='image_div'>
                                                          <img src={isto} alt="" />
                                                     </div>
                                                </td>
                                                <td className='nom_prod'>
                                                    <div className='image_div'>
                                                        <img src={isto} alt="" />
                                                     </div>
                                                </td>
                                                <td>
                                                     Vievre thyphoide
                                                </td>
                                                <td>
                                                      corps chaud, mal de tete, diarrhée
                                                </td>
                                                <td>Artefan, paracetamol</td>
                                                
                                                <td>
                                                     <div className="">
                                                         <button>Modifier</button> 
                                                     </div>
                                                </td>
                                                <td>
                                                     <button className='sup'>Supprimer</button>
                                                </td>
                                           </tr>
                            </tbody>
                            <tbody className='tbody'>
                                 
                                                
                                           <tr>
                                                <td>07/09/2022</td>
                                                <td>
                                                     <div className='image_div'>
                                                          <img src={isto} alt="" />
                                                     </div>
                                                </td>
                                                <td className='nom_prod'>
                                                    <div className='image_div'>
                                                        <img src={isto} alt="" />
                                                     </div>
                                                </td>
                                                <td>
                                                     Paludisme
                                                </td>
                                                <td>
                                                      corps chaud, mal de tete, diarrhée
                                                </td>
                                                <td>Artefan, paracetamol</td>
                                                
                                                <td>
                                                     <div className="">
                                                         <button>Modifier</button> 
                                                     </div>
                                                </td>
                                                <td>
                                                     <button className='sup'>Supprimer</button>
                                                </td>
                                           </tr>
                            </tbody>
                       </table>
                  </div>
             </div>
        </div>
   );
};
export default Historique;