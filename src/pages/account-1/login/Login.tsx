import React from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import messages from '../../../messages/messages'
import { LoginFormValues } from '../../../type/global'
import AccountForm from '../AccountForm'

function Login() {
  const {title, subtitle, noAccount, forgotPassword, forgotPasswordLink, createAccountLink, createAccount, btnText, emailPlaceholder, passwordPlaceholder} = messages.pages.login

  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormValues>({
    defaultValues: {
        email: "",
        password: ""
    }
  })

  const onValid: SubmitHandler<LoginFormValues>=(data, e)=>{
    console.log(data)
  }

  const onError: SubmitErrorHandler<LoginFormValues>=(errors, e)=>{

  }
    
  return (
    <AccountForm 
        title={title}
        subtitle={subtitle}
        additionalText={forgotPassword}
        additionalLink={forgotPasswordLink}
        footerTitle={createAccount}
        footerText={noAccount}
        footerLink={createAccountLink}
    >
        <form onSubmit={handleSubmit(onValid, onError)}>
            <input placeholder={emailPlaceholder} type="text" {...register("email", {
                required: "Email must no be empty!",
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is not valid"
                } 
            })}/>
            {errors.email && <p className='error-message'>{errors.email.message}</p>}
            <input placeholder={passwordPlaceholder} type="password" {...register("password", {
                required: "Password must not be empty!"
            })}/>
            {errors.password && <p className='error-message'>{errors.password.message}</p>}
            <button className='btn' type="submit">{btnText}</button>
        </form>
    </AccountForm>
  )
}

export default Login