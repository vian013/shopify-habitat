import React from 'react'
import BackgroundImageText from '../../sections/background-image-text/BackgroundImageText'
import messages from '../../messages/messages'
import "./About.css"
import TextBanner from '../../sections/text-banner/TextBanner'
import ImageWithText from '../../sections/image-with-text/ImageWithText'

function About() {
    const {backgroundImageText} = messages.pages.about.sections
    const {text} = messages.pages.about.sections.textBanner
    const {imageWithText} = messages.pages.about.sections
    
    return (
        <div id='about-page'>
            <BackgroundImageText 
                {...backgroundImageText}
            />
            <TextBanner text={text}/>
            <ImageWithText 
                {...imageWithText}
            />
        </div>
    )
}

export default About