import React from 'react'
import messages from '../../messages/messages'
import './FAQ.css'
import Question from './question/Question'

function FAQ() {
    const {title, subtitle, questions} = messages.pages.faq
    
  return (
    <div id='faq-page'>
        <div className="page-width">
            <h1 className="title">{title}</h1>
            <p className='subtitle'>{subtitle}</p>

            <div className="questions-wrapper">
                {questions.map((question) => (
                    <Question {...question}/>
                ))}
            </div>

        </div>
    </div>
  )
}

export default FAQ