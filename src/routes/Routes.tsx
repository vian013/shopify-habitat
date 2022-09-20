import React from 'react'
import {Switch, Route} from "react-router-dom"
import About from '../pages/about/About'
import Account from '../pages/account/Account'
import Blogs from '../pages/blogs/Blogs'
import CreateAccount from '../pages/create-account/CreateAccount'
import FAQ from '../pages/faq/FAQ'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NotFound from '../pages/not-found/NotFound'
import Product from '../pages/product/Product'
import Products from '../pages/products/Products'

function Routes() {
  return (
    <Switch>
            <Route path={"/"} exact>
              <Home />
            </Route>
            <Route path={"/products"} exact>
                <Products />
            </Route>
            <Route path={"/products/:handle"}>
                <Product />
            </Route>
            <Route path={"/blogs"} exact>
                <Blogs />
            </Route>
            <Route path={"/blogs/news/tagged/:handle"}>
                <Blogs />
            </Route>
            <Route path={"/about"}>
                <About />
            </Route>
            <Route path={"/faq"}>
                <FAQ />
            </Route>
            <Route path={"/account"} exact>
                <Account />
            </Route>
            <Route path={"/account/login"}>
                <Login />
            </Route>
            <Route path={"/account/register"}>
                <CreateAccount />
            </Route>
            <Route path={"*"}>
                <NotFound />
            </Route>

    </Switch>
  )
}

export default Routes