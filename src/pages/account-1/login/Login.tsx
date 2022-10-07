import React, { useEffect } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import messages from '../../../messages/messages'
import { login, loginRequest } from '../../../redux/user/actions'
import { Action, User, UserData } from '../../../redux/user/types'
import { LoginFormValues } from '../../../type/global'
import {ThunkDispatch} from "redux-thunk"
import AccountForm from '../account-form/AccountForm'
import { useHistory } from 'react-router-dom'

type Props = {
  loading: boolean, 
  login: Function, 
  error: string
  user: User
}

function Login({loading, login, user, error}: Props) {
  const {title, subtitle, noAccount, forgotPassword, forgotPasswordLink, createAccountLink, createAccount, btnText, emailPlaceholder, passwordPlaceholder} = messages.pages.login

  const {register, handleSubmit, getValues, formState: {errors}} = useForm<LoginFormValues>({
    defaultValues: {
        email: "",
        password: ""
    }
  })

  const history = useHistory()

  const onValid: SubmitHandler<LoginFormValues>=(data, e)=>{
    const info = getValues()
    login(info)
  }

  const onError: SubmitErrorHandler<LoginFormValues>=(errors, e)=>{

  }

  useEffect(()=>{
    if (user) history.push("/account")
  }, [user])
    
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
            {loading && <p>Loading...</p>}
            {error && <p className='error-message'>{error}</p>}
            <button className='btn' type="submit">{btnText}</button>
        </form>
    </AccountForm>
  )
}

const mapStateToProps = (state: {user: UserData}) => {
  const {loading, user, error} = state.user
  return {
    loading,
    user,
    error
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<UserData, null, Action>) => {
  return {
    loginRequest: () => dispatch(loginRequest()),
    login: (info: {email: string, password: string}) => dispatch(login(info))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 