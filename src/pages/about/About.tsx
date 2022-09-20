import React from 'react'
import BackgroundImageText from '../../sections/background-image-text/BackgroundImageText'
import messages from '../../messages/messages'
import "./About.css"
import TextBanner from '../../sections/text-banner/TextBanner'
import ImageWithText from '../../sections/image-with-text/ImageWithText'
import ImageTextSlider from '../../sections/image-text-slider/ImageTextSlider'
import OurStores from '../../sections/about-page/our-stores/OurStores'
import Testimonials from '../../sections/testimonials/Testimonials'

function About() {
    const {backgroundImageText} = messages.pages.about.sections
    const {text} = messages.pages.about.sections.textBanner
    const {imageWithText} = messages.pages.about.sections
    const {slides} = messages.pages.about.sections.imageTextSlider
    
    return (
        <div id='about-page'>
            <BackgroundImageText {...backgroundImageText}/>
            <TextBanner text={text}/>
            <ImageWithText {...imageWithText}/>
            <ImageTextSlider slides={slides}/>
            <OurStores />
            <Testimonials />
        </div>
    )
}

export default About