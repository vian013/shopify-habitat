import { useState, createContext, useEffect} from "react";
import Header from "./layout/header/Header";
import currencies from "./settings-options/currencies";
import languages from "./settings-options/languages";

interface IAction {
  type: string, 
  payload: any
}

interface IValues {
  state: IState,
  dispatch: ({}: IAction) => void
}

interface IState {
  openSearch: boolean,
  language: string
  currency: string,
}


const initState: IState = {
  openSearch: false,
  language: languages[0],
  currency: currencies[0]
}

const initValues: IValues = {
  state: initState,
  dispatch: ()=>{}
}

export const AppContext = createContext(initValues)
const AppProvider = AppContext.Provider

function App() {
  const [state, setState] = useState(initState)

  const reducer = ({type, payload}: IAction) => {
    switch (type) {
      case "TOGGLE_SEARCH":
        setState((prev: IState)=> {
          return {
            ...prev,
            openSearch: !prev.openSearch
          }
        })
        break;
      case "SET_LANGUAGE":
        setState((prev: IState) => {
          return {
            ...prev,
            language: payload
          }
        })
      case "SET_CURRENCY":
        setState((prev: IState) => {
          return {
            ...prev,
            currency: payload
          }
        })
      default:
        return state
    }
  }

  const dispatch = (action: IAction) => {
    reducer(action)
  }

  return (
    <AppProvider value={{state, dispatch}}>
      <div className="App">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
