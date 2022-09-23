import React from 'react'
import messages from '../../messages/messages'
import "./Contact.css"

function Contact() {
    const {title, btnText, comment, phone, email, name, contactInfo} = messages.pages.contact
    
    const handleSubmit = () => {

    }
    
  return (
    <div id='contact-page'>
        <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17710.383732164693!2d105.81486792925305!3d21.066688447622724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee7e104bde3c4300!2zMjHCsDA0JzA2LjMiTiAxMDXCsDQ5JzI2LjIiRQ!5e0!3m2!1sen!2s!4v1663904560589!5m2!1sen!2s" width="100%" height="550" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="page-width">
            <h1 className="title">{title}</h1>
            <div className="content-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="top-inputs">
                        <input type="text" placeholder={name}/>
                        <input type="text" placeholder={email}/>
                    </div>
                    <input type="text" placeholder={phone}/>
                    <textarea placeholder={comment}></textarea>
                    <button type='submit' className='btn'>{btnText}</button>
                </form>
                <div className="contact-info">
                    {contactInfo.map(({title, info1, info2}, index) => (
                        <div className="info-wrapper" key={index}>
                            <h3>{title}</h3>
                            <p>{info1}</p>
                            <p>{info2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact