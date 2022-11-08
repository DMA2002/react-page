import React from 'react'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import Navbar from "../Components/Navbar"
import Services from '../Components/Services'
 
function Home() {
    return (
        <div>
          <header>
            <Navbar />  
          </header>
          <main>
            <Main/>  
            <Services/> 
          </main>
          
          <footer>
            
          </footer>
          
        </div>
    )
}

export default Home

