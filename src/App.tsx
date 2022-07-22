
import { useState, createContext, useEffect, useReducer} from "react";
import Header from "./layout/header/Header";
import currencies from "./settings-options/currencies";
import languages from "./settings-options/languages";
import {BrowserRouter as Router, useHistory} from "react-router-dom"
import Routes from "./routes/Routes";
import {IAction, IState} from "./type/global"
import { reducer } from "./store/reducer";

interface IValues {
  state: IState,
  dispatch: ({}: IAction<any>) => void
}


const initState: IState = {
  language: languages[0],
  currency: currencies[0],
  isBackgroundBlurred: false,
  isLoggedIn: false
}

export const AppContext = createContext<IValues|null>(null)
const AppProvider = AppContext.Provider

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <Router>
      <AppProvider value={{state, dispatch}}>
        <div className="App">
          <Header />
          <Routes />
          <div className={`blurred-bg ${state.isBackgroundBlurred?"open":""}`}></div>
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
