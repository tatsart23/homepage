import React from 'react'
import './ExpertiseInfoCard.css'

const ExpertiseInfoCard = ({head, expertise, icon}) => {
  return (
    <div className='expert-info-card'>
      <h6>
        <img src={icon} alt={head} />
        {head}
      </h6>

      <div className="expertise-info-content">
        {expertise.map((item, index) => (
          <React.Fragment key={`expertise_${index}`}>
            <div className="expertise-info">
              <p>{item.expertise}</p>
              <p className='percentage'>{item.percent}</p>
            </div>
            <div className="expertise-progress-bg">
              <div 
                className="expertise-progress" 
                style={{ width:item.percent }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ExpertiseInfoCard
