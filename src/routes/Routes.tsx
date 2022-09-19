import React from 'react'
import {Switch, Route} from "react-router-dom"
import About from '../pages/about/About'
import Account from '../pages/account/Account'
import Blogs from '../pages/blogs/Blogs'
import CreateAccount from '../pages/create-account/CreateAccount'
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
            <Route path={"/account"}>
                <Account />
            </Route>
            <Route path={"/login"}>
                <Login />
            </Route>
            <Route path={"/create-account"}>
                <CreateAccount />
            </Route>
            <Route path={"*"}>
                <NotFound />
            </Route>

    </Switch>
  )
}

export default Routes