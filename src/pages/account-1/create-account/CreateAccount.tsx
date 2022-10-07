import React, { useEffect } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import messages from '../../../messages/messages'
import { createUser } from '../../../redux/user/actions'
import { Action, User, UserData } from '../../../redux/user/types'
import { CreateAccountFormValues } from '../../../type/global'
import AccountForm from '../account-form/AccountForm'
import "./CreateAccount.css"

type Props = {
    loading: boolean,
    createAccountError: string,
    user: User,
    createUser: Function
}

function CreateAccount({loading, user, createUser, createAccountError}: Props) {
  const {alreadyAccount, btnText, fNamePlaceholder, lnamePlaceholder, login, loginLink, subtitle, title} = messages.pages.register
  const { emailPlaceholder, passwordPlaceholder} = messages.pages.login
  const history = useHistory()
    
  const {register, handleSubmit, getValues, formState: {errors}} = useForm<CreateAccountFormValues>({
    defaultValues: {
        email: "",
        password: "",
        fName: "",
        lName: ""
    }
  })

  const onValid: SubmitHandler<CreateAccountFormValues>=(data, e)=>{
    createUser(data)
  }

  const onError: SubmitErrorHandler<CreateAccountFormValues>=(errors, e)=>{

  }

  return user ? (
    <Redirect to={"/account"}/>
  ) : (
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
                {createAccountError && <p className='error-message'>{createAccountError}</p>}
                <button className='btn' type="submit">{btnText}</button>
            </form>
        </AccountForm>
    </div>

  )
}

const mapStateToProps = (state: {user: UserData}) => {
    const {loading, user, createAccountError} = state.user
    return {
        loading,
        user,
        createAccountError
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<UserData, null, Action>) => {
    return {
        createUser: (fields: {email: string, password: string, fName: string, lName: string}) => dispatch(createUser(fields))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount) 