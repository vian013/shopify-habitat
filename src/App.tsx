import { useState, createContext, useEffect, useReducer} from "react";
import Header from "./layout/header/Header";
import currencies from "./settings-options/currencies";
import languages from "./settings-options/languages";
import {BrowserRouter as Router, useHistory} from "react-router-dom"
import Routes from "./routes/Routes";
import {IAction, ICart, IState, IUser} from "./type/global"
import { reducer } from "./store/reducers/reducer";
import { userReducer } from "./store/reducers/userReducer";
import { cartReducer } from "./store/reducers/cartReducer";

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
  isLoggedIn: false
}

const initUser: IUser = {
  fName: "",
  lName: "",
  email: ""
}

const initCart: ICart = {
  cartId: "",
  cartItems: []
}

export const AppContext = createContext<IAppValues|null>(null)
const AppProvider = AppContext.Provider

export const UserContext = createContext<IUserValues|null>(null)
const UserProvider = UserContext.Provider

export const CartContext = createContext<ICartValues|null>(null)
const CartProvider = CartContext.Provider

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [userState, userDispatch] = useReducer(userReducer, initUser)
  const [cartState, cartDispatch] = useReducer(cartReducer, initCart)
  useEffect(() => {
    console.log(cartState);
  }, [cartState])

  return (
    <Router>
      <AppProvider value={{state, dispatch}}>
        <UserProvider value={{userState, userDispatch}}>
          <CartProvider value={{cartState, cartDispatch}}>
            <div className="App">
              <Header />
              <Routes />
              <div className={`blurred-bg ${state.isBackgroundBlurred?"open":""}`}></div>
            </div>
          </CartProvider>
        </UserProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
