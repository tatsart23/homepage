import React from 'react'
import './Expertise.css'
import { EXPERTISES } from '../../utilities/data'
import Card from './Card/Card'
import { useState } from 'react'
import ExpertiseInfoCard from './ExpertiseInfoCard/ExpertiseInfoCard'

const Expertise = () => {

    const [selectedExpertise, setSelectedExpertise] = useState(EXPERTISES[0]);

    const handleSelectExpertise = (data) => { 
        setSelectedExpertise(data);
    }

    return (
        <section className='expertise-container'>
            <h5>Tekninen osaaminen</h5>
                <div className="expertise-content">
                    <div className="expertise">
                        {EXPERTISES.map((item) => (
                            <Card
                                key={item.title}
                                iconUrl={item.icon}
                                title={item.title}
                                isActive={selectedExpertise.title === item.title}
                                onClick={() => { 
                                    handleSelectExpertise(item)
                                }}
                            />
                        ))}
                    </div>
                    <div className="expertise-info">
                        <ExpertiseInfoCard 
                            head={selectedExpertise.title} 
                            expertise={selectedExpertise.expertises}
                            icon={selectedExpertise.icon} />
                    </div>
                </div>
        </section>
    )
}

export default Expertise
