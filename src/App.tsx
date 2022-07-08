import { useState, createContext, useEffect} from "react";
import Header from "./layout/header/Header";
import currencies from "./settings-options/currencies";
import languages from "./settings-options/languages";

interface IValues {
  state: IState,
  setState: React.Dispatch<any>
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
  setState: ()=>{}
}

export const AppContext = createContext(initValues)
const AppProvider = AppContext.Provider


function App() {
  const [state, setState] = useState(initState)

  useEffect(()=>{
    console.log(state);
  }, [state])

  return (
    <AppProvider value={{state, setState}}>
      <div className="App">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
