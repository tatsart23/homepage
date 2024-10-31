import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
        <h6>{details.title}</h6>

        <div className="duration">{details.date}</div>

        <ul>
            {details.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}


export default ExperienceCard
