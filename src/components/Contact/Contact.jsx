import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex:1 }}>
                <ContactInfoCard
                    iconUrl = "./assets/images/email.png"
                    text = "Sartovuo@gmail.com"
                />
                <ContactInfoCard
                    iconUrl = "./assets/images/git.png"
                    text = "https://github.com/tatsart23"
                />
            </div>
            <div style={{ flex:1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact
