import React, { Reducer, useReducer } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import ValidationMessage from '../../components/validation-message/ValidationMessage'
import messages from '../../messages/messages'
import "./Contact.css"
import { setCommentError, setEmailError, setNameError, setPhoneError, setSuccess } from './reducer/actions'
import contactReducer from './reducer/reducer'
import { ContactActions, FormMessages, FormValues } from './reducer/types'

const initState: FormValues = {
    name: "",
    email: "",
    phone: "",
    comment: ""
}

const initMessageState: FormMessages = {
    success: "",
    name: "",
    email: "",
    phone: "",
    comment: ""
}

function Contact() {
    const {title, btnText, comment, phone, email, name, contactInfo} = messages.pages.contact
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        defaultValues: initState
    })
    const [state, dispatch] = useReducer(contactReducer, initMessageState)
    const onSubmit: SubmitHandler<FormValues> = (data, e) => {
        dispatch(setSuccess("✅Thank you for signing up!"))
    }
    
    const onError: SubmitErrorHandler<FormValues> = (error, e) => {
        error.name?.message && dispatch(setNameError(error.name.message))
        error.email?.message && dispatch(setEmailError(error.email.message))
        error.phone?.message && dispatch(setPhoneError(error.phone.message))
        error.comment?.message && dispatch(setCommentError(error.comment.message))
    }
    
  return (
    <div id='contact-page'>
        <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17710.383732164693!2d105.81486792925305!3d21.066688447622724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee7e104bde3c4300!2zMjHCsDA0JzA2LjMiTiAxMDXCsDQ5JzI2LjIiRQ!5e0!3m2!1sen!2s!4v1663904560589!5m2!1sen!2s" width="100%" height="550" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="page-width">
            <h1 className="title">{title}</h1>
            <div className="content-wrapper">
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    {state.success && <ValidationMessage type='success' setMessage={(mes)=>{dispatch(setSuccess(mes))}} message={state.success}/>}
                    <div className="top-inputs">
                            <input type="text" placeholder={name} {...register("name", {
                                required: "Must not be empty"
                            })}/>
                            {state.name && <ValidationMessage setMessage={(mes)=>{dispatch(setNameError(mes))}} message={state.name}/>}
                            <input type="text" placeholder={email} {...register("email", {
                                required: "Must not be empty",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Email is not valid"
                                }
                            })}/>
                            {state.email && <ValidationMessage setMessage={(mes)=>{dispatch(setEmailError(mes))}} message={state.email}/>}
                    </div>
                    <div className="input-wrapper">
                        <input type="text" placeholder={phone} {...register("phone", {
                                required: "Must not be empty",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "Must contain ony numbers"
                                }
                            })}/>
                        {state.phone && <ValidationMessage setMessage={(mes)=>{
                        dispatch(setPhoneError(mes))}} message={state.phone}/>}
                    </div>
                    <div className="input-wrapper">
                        <textarea placeholder={comment} {...register("comment", {
                                required: "Must not be empty"
                            })}></textarea>
                        {state.comment && <ValidationMessage setMessage={(mes)=>{dispatch(setCommentError(mes))}} message={state.comment}/>}
                    </div>
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