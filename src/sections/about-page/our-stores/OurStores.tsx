import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '../../../components/section-header/SectionHeader'
import messages from '../../../messages/messages'
import "./OurStores.css"

function OurStores() {
    const {title, subttitle, stores} = messages.pages.about.sections.ourStores
    
  return (
    <div className='our-stores section'>
        <div className="page-width">
            <SectionHeader title={title} subTitle={subttitle}/>

            <div className="stores-wrapper">
                {stores.map(({address, imgUrl, title, btnLink}, index)=> (
                    <div className="store-wrapper" key={index}>
                        <div className="img-wrapper">
                            <img src={imgUrl} alt={title} loading="lazy"/>
                        </div>
                        <h1 className='title'>{title}</h1>
                        <p className="address">{address}</p>
                        <Link to={btnLink} className="shop-btn">Get directions</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurStores