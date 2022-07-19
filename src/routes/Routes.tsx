import React from 'react'
import {Switch, Route} from "react-router-dom"
import Home from '../pages/home/Home'
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
    </Switch>
  )
}

export default Routes