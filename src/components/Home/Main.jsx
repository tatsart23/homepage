import React from 'react'
import './Main.css'
import Expertise from '../Expertise/Expertise'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'

const Main = () => {
  return (
    <>
      <section className='main-container'>
        <div className="main-content">
          <h2>Tietoa minusta</h2>
            <p>
              Olen 30 vuotias koodarin alku, joka on kiinnostunut web-kehityksestä. Opiskelen tällä hetkellä Salon seudun ammattiopistossa ohjelmistokehittäjäksi. Olen tehnyt joitain projekteja, joista voit lukea lisää täältä.
            </p>
        </div>
        <div className="main-image">
          <div>
            <div className="main-icon">
              <img src="./assets/images/reactlogo.png" alt="" />
            </div>
            <img src="./assets/images/randy.png" alt="" />
          </div>
          
          <div>
            <div className="main-icon">
              <img src="./assets/images/htmllogo.png" alt="" />
            </div>
            <div className="main-icon">
              <img src="./assets/images/csslogo.png" alt="" />
            </div>
            <div className="main-icon">
              <img src="./assets/images/jslogo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Expertise />
      <Experience />
      <Contact />
    </>
  )
}

export default Main
