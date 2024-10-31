import React from 'react'
import './Card.css'

const Card = ({ title, iconUrl, isActive, onClick}) => {
  return (
    <div
        className={`exper-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
    >
        <div className="expertise-icon">
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
      
    </div>
  )
}


export default Card
