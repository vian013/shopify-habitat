import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loading from '../layout/loading/Loading'
// import About from '../pages/about/About'
// import Blogs from '../pages/blogs/Blogs'
// import FAQ from '../pages/faq/FAQ'
// import Home from '../pages/home/Home'
// import NotFound from '../pages/not-found/NotFound'
// import Product from '../pages/product/Product'
// import Products from '../pages/products/Products'
// import Blog from '../pages/blogs/blog/Blog'
// import Contact from '../pages/contact/Contact'
// import Cart from '../pages/cart/Cart'
// import Login from '../pages/account-1/login/Login'
// import CreateAccount from '../pages/account-1/create-account/CreateAccount'
// import ResetPassword from '../pages/account-1/reset-password/ResetPassword'
// import Account from '../pages/account-1/Account'

const About = React.lazy(() => import('../pages/about/About'))
const Blogs = React.lazy(() => import('../pages/blogs/Blogs'))
const FAQ = React.lazy(() => import('../pages/faq/FAQ'))
const Home = React.lazy(() => import('../pages/home/Home'))
const NotFound = React.lazy(() => import('../pages/not-found/NotFound'))
const Product = React.lazy(() => import('../pages/product/Product'))
const Products = React.lazy(() => import('../pages/products/Products'))
const Blog = React.lazy(() => import('../pages/blogs/blog/Blog'))
const Contact = React.lazy(() => import('../pages/contact/Contact'))
const Cart = React.lazy(() => import('../pages/cart/Cart'))
const Login = React.lazy(() => import('../pages/account-1/login/Login'))
const CreateAccount = React.lazy(
  () => import('../pages/account-1/create-account/CreateAccount')
)
const ResetPassword = React.lazy(
  () => import('../pages/account-1/reset-password/ResetPassword')
)
const Account = React.lazy(() => import('../pages/account-1/Account'))

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={'/'} exact>
          <Home />
        </Route>
        <Route path={'/products'} exact>
          <Products />
        </Route>
        <Route path={'/products/:handle'}>
          <Product />
        </Route>
        <Route path={'/blogs'} exact>
          <Blogs />
        </Route>
        <Route path={'/blogs/news/:handle'} exact>
          <Blog />
        </Route>
        <Route path={'/blogs/news/tagged/:handle'}>
          <Blogs />
        </Route>
        <Route path={'/about'}>
          <About />
        </Route>
        <Route path={'/contact'}>
          <Contact />
        </Route>
        <Route path={'/faq'}>
          <FAQ />
        </Route>
        <Route path={'/account'} exact>
          <Account />
        </Route>
        <Route path={'/account/login'} exact>
          <Login />
        </Route>
        <Route path={'/account/recover'}>
          <ResetPassword />
        </Route>
        <Route path={'/account/register'}>
          <CreateAccount />
        </Route>
        <Route path={'/cart'}>
          <Cart />
        </Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Routes
