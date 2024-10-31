import React from 'react'
import './Projects.css'
import { PROJECTS } from '../../utilities/data'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Projects = () => {

  const [text]  = useTypewriter({
    words: ['Projects', 'Projektit', 'Projets', 'Projekte', 'Proyectos', 'Progetti'],
    loop:{},
    typeSpeed: 120,
  })
  
  return (
    <section className='Projects-container'>
        <div className='Project-content'>  
            <h1>
              <span style={{color:'orange'}}>{text}<Cursor/></span>
            </h1>  
            <div className='Projects'>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='Project'>
                        <h3>{project.title}</h3>
                        <div className='project-info'>
                          <img src={project.img} alt={project.title} />
                          <div>
                            <p>{project.info}</p>
                            <p className='plans'>{project.plans}</p>
                          </div>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    </section>
  )
}

export default Projects
