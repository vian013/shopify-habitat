import React from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import messages from '../../../messages/messages'
import { CreateAccountFormValues } from '../../../type/global'
import AccountForm from '../account-form/AccountForm'
import "./CreateAccount.css"

function CreateAccount() {
  const {alreadyAccount, btnText, fNamePlaceholder, lnamePlaceholder, login, loginLink, subtitle, title} = messages.pages.register
  const { emailPlaceholder, passwordPlaceholder} = messages.pages.login
    
  const {register, handleSubmit, formState: {errors}} = useForm<CreateAccountFormValues>({
    defaultValues: {
        email: "",
        password: "",
        fName: "",
        lName: ""
    }
  })

  const onValid: SubmitHandler<CreateAccountFormValues>=(data, e)=>{
    console.log(data)
  }

  const onError: SubmitErrorHandler<CreateAccountFormValues>=(errors, e)=>{

  }

  return (
    <div className="create-account-wrapper">
        <AccountForm 
            title={title}
            subtitle={subtitle}
            footerTitle={alreadyAccount}
            footerText={login}
            footerLink={loginLink}
        >
            <form onSubmit={handleSubmit(onValid, onError)}>
                <div className='name-input-wrapper'>
                    <input 
                        type="text" 
                        placeholder={fNamePlaceholder} 
                        {...register("fName", {
                            required: "First name must not be empty",
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "Must contain only letters"
                            }
                        })}
                    />
                    {errors.fName && <p className='error-message'>{errors.fName.message}</p>}
                    <input 
                        type="text" 
                        placeholder={lnamePlaceholder}
                        {...register("lName", {
                            required: "Last name must not be empty",
                            pattern: {
                                value: /^[A-Za-z]+$/i,
                                message: "Must contain only letters"
                            }
                        })}
                    />
                    {errors.lName && <p className='error-message'>{errors.lName.message}</p>}
                </div>

                <input 
                    placeholder={emailPlaceholder} 
                    type="text" 
                    {...register("email", {
                        required: "Email must no be empty!",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Email is not valid"
                        } 
                    })}
                />
                {errors.email && <p className='error-message'>{errors.email.message}</p>}
                <input 
                    placeholder={passwordPlaceholder} 
                    type="password" 
                    {...register("password", {
                        required: "Password must not be empty!"
                    })}
                />
                {errors.password && <p className='error-message'>{errors.password.message}</p>}
                <button className='btn' type="submit">{btnText}</button>
            </form>
        </AccountForm>
    </div>

  )
}

export default CreateAccount