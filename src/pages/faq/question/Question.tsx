import React, { useState } from 'react'
import "./Question.css"

function Question({content, answers}: {content: string, answers: string[]}) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
  return (
    <div className='question-wrapper'>
        <h1 className={`question dropdown-btn ${isOpen?"open":""}`} onClick={()=>setIsOpen(!isOpen)}>{content}</h1>
        {isOpen && (
            <div className="answers">
                {answers.map((answer, index) => (
                    <div className='answer' key={index}>
                        <p>{answer}</p>
                        {index!==answers.length-1 && <br/>}
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Question