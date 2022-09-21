import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { AppContext } from '../../../App'
import AccountForm from '../../../components/account-form/AccountForm'
import messages from '../../../messages/messages'
import { AppActions } from '../../../store/actions/actions'
import "./CreateAccount.css"

function CreateAccount() {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {state, dispatch} = useContext(AppContext)!
    const history = useHistory()
    const isLoggedIn = state.isLoggedIn

    useEffect(()=>{
        if (isLoggedIn) history.push("/account")
    },[isLoggedIn])
    
    const createAccount = () => {
        const query = `
            mutation customerCreate($input: CustomerCreateInput!) {
                customerCreate(input: $input) {
                customerUserErrors {
                    code
                    field
                    message
                }
                customer {
                    id
                }
                }
            }
        `
        const variables = {
            input: {
                "email": email,
                "password": password,
                "firstName": fName,
                "lastName": lName
            }
          }

        const fetchData = async () => {
            try {
                const res = await fetch("https://kevin013.myshopify.com/api/2022-07/graphql.json", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Shopify-Storefront-Access-Token": "a2dd507dc76d0a2fad44319092092001"
                    },
                    body: JSON.stringify({query, variables})
                })
                const allData = await res.json()
                const {data, errors} = allData
                
                if (data.customerCreate) {
                    const customer = data.customerCreate.customer
                    const customerErrors = data.customerCreate.customerUserErrors

                    if (customer) {
                        console.log(customer);
                        dispatch({type: AppActions.SET_LOGGEDIN})
                    }
                    if (customerErrors.length > 0){
                        console.log(customerErrors[0].message);
                    }
                }

                if (errors) {
                    console.log(errors[0]);
                    setError(errors[0])
                }

            } catch (error) {
                console.log(error)
                
            }
        }

        fetchData()

    } 

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault()
        createAccount()
    }

    const {alreadyAccount, btnText, fNamePlaceholder, lnamePlaceholder, login, loginLink, subtitle, title} = messages.pages.register
    
    return isLoggedIn ? (
        <Redirect to={"/account"}/>
    ) : (
        <div className="create-account-wrapper">
            <AccountForm 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                error={error}
                title={title}
                subtitle={subtitle}
                btnText={btnText}
                footerTitle={alreadyAccount}
                footerText={login}
                footerLink={loginLink}
            >
                <div className='name-input-wrapper'>
                    <input type="text" placeholder={fNamePlaceholder}/>
                    <input type="text" placeholder={lnamePlaceholder}/>
                </div>
            </AccountForm>
        </div>
    )
}

export default CreateAccount