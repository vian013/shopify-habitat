import { useState, createContext, useEffect, useReducer} from "react";
import Header from "./layout/header/Header";
import currencies from "./settings-options/currencies";
import languages from "./settings-options/languages";
import {BrowserRouter as Router, useHistory} from "react-router-dom"
import Routes from "./routes/Routes";
import {IAction, IState, IUser} from "./type/global"
import { reducer } from "./store/reducers/reducer";
import { userReducer } from "./store/reducers/userReducer";

export interface IAppValues {
  state: IState,
  dispatch: ({}: IAction<any>) => void
}

export interface IUserValues {
  userState: IUser,
  userDispatch: ({}: IAction<any>) => void
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

export const AppContext = createContext<IAppValues|null>(null)
const AppProvider = AppContext.Provider

export const UserContext = createContext<IUserValues|null>(null)
const UserProvider = UserContext.Provider

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [userState, userDispatch] = useReducer(userReducer, initUser)

  return (
    <Router>
      <AppProvider value={{state, dispatch}}>
        <UserProvider value={{userState, userDispatch}}>
          <div className="App">
            <Header />
            <Routes />
            <div className={`blurred-bg ${state.isBackgroundBlurred?"open":""}`}></div>
          </div>
        </UserProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
