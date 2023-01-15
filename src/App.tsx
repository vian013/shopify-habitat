import { useState, createContext, useEffect, useReducer} from "react";
import Header from "./layout/header/Header";
import currencies from "./messages/settings-options/currencies";
import languages from "./messages/settings-options/languages";
import {Router, useHistory} from "react-router-dom"
import Routes from "./routes/Routes";
import {IAction, ICart, IState, IUser} from "./type/global"
import { reducer } from "./store/reducers/reducer";
import { userReducer } from "./store/reducers/userReducer";
import { cartReducer } from "./store/reducers/cartReducer";
import { CartActions } from "./store/actions/cartActions";
import { createBrowserHistory } from "history";
import "./App.css"
import Footer from "./layout/footer/Footer";
import "lazysizes"
import Overlay from "./layout/overlay/Overlay";
import {Provider, useDispatch} from "react-redux"
import { fetchCart } from "./redux/cart/actions";

export const BASE_URL = process.env.REACT_APP_BASE_API_URL

interface IAppValues {
  state: IState,
  dispatch: ({}: IAction<any>) => void
}

interface IUserValues {
  userState: IUser,
  userDispatch: ({}: IAction<any>) => void
}

interface ICartValues {
  cartState: ICart,
  cartDispatch: ({}: IAction<any>) => void
}

const initState: IState = {
  language: languages[0],
  currency: currencies[0],
  isBackgroundBlurred: false,
  isLoggedIn: false,
  isSidebarOpen: false,
  isQuickViewOpen: false,
  quickViewHandle: ""
}

const initUser: IUser = {
  fName: "",
  lName: "",
  email: ""
}

const initCart: ICart = {
  cartId: "",
  cartItems: [],
  isCartOpen: false,
  cartTotalQuantity: 0,
  outOfStockError: {lineId: ""}
}

export const AppContext = createContext<IAppValues|null>(null)
const AppProvider = AppContext.Provider

export const UserContext = createContext<IUserValues|null>(null)
const UserProvider = UserContext.Provider

export const CartContext = createContext<ICartValues|null>(null)
const CartProvider = CartContext.Provider

export const history = createBrowserHistory()

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [userState, userDispatch] = useReducer(userReducer, initUser)
  const [cartState, cartDispatch] = useReducer(cartReducer, initCart)
  const _dispatch = useDispatch()

  
  useEffect(()=>{
    const cookie = document.cookie
    if(cookie.indexOf("cartId") !== -1) {
      const cartId = cookie.substring(7)
      _dispatch(fetchCart(cartId))
    } 
  }, [])

  return (
    <Router history={history}>
        <AppProvider value={{state, dispatch}}>
          <UserProvider value={{userState, userDispatch}}>
            <CartProvider value={{cartState, cartDispatch}}>
              <div className="App">
                <Header />
                <Routes />
                <Footer />
                <Overlay isBackgroundBlurred={state.isBackgroundBlurred}/>
              </div>
            </CartProvider>
          </UserProvider>
        </AppProvider>
    </Router>
  );
}

export default App;
