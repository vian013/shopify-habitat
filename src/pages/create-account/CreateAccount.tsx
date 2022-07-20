import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../App'
import { AppActions } from '../../store/actions'
import style from "./CreateAccount.module.css"

function CreateAccount() {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                }

            } catch (error) {
                console.log(error)
                
            }
        }

        fetchData()

    } 

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        createAccount()
    }
    
  return (
    <div className={style['create-account-container']}>
        <form onSubmit={handleSubmit} >
            Fist Name
            <input type="text" value={fName} onChange={e => setFName(e.target.value)}/>
            <br />
            Last Name
            <input type="text" value={lName} onChange={e => setLName(e.target.value)}/>
            <br />
            Email
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            Password
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <br />

            <input type="submit" />
        </form>
    </div>
  )
}

export default CreateAccount