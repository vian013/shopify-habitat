import React, { Dispatch, useEffect, useState } from 'react'
import "./ValidationMessage.css"

function ValidationMessage({message, setMessage, type}: {message: string, setMessage: Dispatch<string>, type?: string}) {
  useEffect(()=> {
    let timeout: NodeJS.Timeout

    if (message) {
      timeout = setTimeout(() => {
        setMessage("")
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [message])
    
  return (
    <p className={`${type==="success"?"success-message":"error-message"}`}>{message}</p>
  )
}

export default ValidationMessage