import React from 'react'
import './Experience.css'
import { EXPERIENCE } from '../../utilities/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { useRef } from 'react'
import Slider from 'react-slick'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Experience = () => {

    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <section className='experience-container'>
            <h5>Experience</h5>
            <div className="experience-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span><ChevronRightIcon /></span>
                </div>
                <div className="arrow-left" onClick={slideLeft}>
                    <span><ChevronLeftIcon /></span>
                </div>
                <Slider ref={sliderRef} {...settings}>
                {EXPERIENCE.map((item) => (
                    <ExperienceCard key={item.title} details={item} />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default Experience
