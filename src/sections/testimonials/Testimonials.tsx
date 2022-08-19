import React from 'react'
import SectionHeader from '../../components/section-header/SectionHeader'
import sections from '../../messages/sections'
import ReviewSlider from './review-slider/ReviewSlider'
import "./Testimonials.css"

function Testimonials() {
    const content = sections.testimonials
    
  return (
    <div className='testimonial section'>
        <SectionHeader {...content}/>
        <ReviewSlider />
    </div>
  )
}

export default Testimonials