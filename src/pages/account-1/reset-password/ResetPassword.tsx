import React, { useState } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import messages from '../../../messages/messages'
import { LoginFormValues } from '../../../type/global'
import "./ResetPassword.css"

function ResetPassword() {
    const {title, subtitle, cancel, cancelLink, submit} = messages.pages.resetPassword
    const { emailPlaceholder } = messages.pages.login

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
        }
      })
    
      const onValid: SubmitHandler<LoginFormValues>=(data, e)=>{
        console.log(data)
      }
    
      const onError: SubmitErrorHandler<LoginFormValues>=(errors, e)=>{
    
      }
    
  return (
    <div id="reset-password-page">
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>

                <form onSubmit={handleSubmit(onValid, onError)}>
                    <input placeholder={emailPlaceholder} type="text" {...register("email", {
                        required: "Email must no be empty!",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email is not valid"
                        }
                    })}/>
                    {errors.email && <p className='error-message'>{errors.email.message}</p>}
                    <button className='btn' type="submit">{submit}</button>
                    <div className="login-footer">
                        <Link to={cancelLink} className="shop-btn">{cancel}</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

export default ResetPassword