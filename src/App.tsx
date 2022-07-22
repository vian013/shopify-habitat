import { useState, createContext, useEffect} from "react";
import BlogPosts from "./layout/blog-posts/BlogPosts";
import Slider from "./layout/components/slide-show/SlideShow";
import Header from "./layout/header/Header";
import currencies from "./settings-options/currencies";
import languages from "./settings-options/languages";

interface IAction {
  type: string, 
  payload?: any
}

interface IValues {
  state: IState,
  dispatch: ({}: IAction) => void
}

interface IState {
  language: string
  currency: string,
  isBackgroundBlurred: boolean,
  test: boolean
}


const initState: IState = {
  language: languages[0],
  currency: currencies[0],
  isBackgroundBlurred: false,
  test: true
}

const initValues: IValues = {
  state: initState,
  dispatch: ()=>{}
}

export const AppContext = createContext(initValues)
const AppProvider = AppContext.Provider

function App() {
  const [state, setState] = useState(initState)

  useEffect(()=> {
    console.log(state);
  }, [state])

  const reducer = ({type, payload}: IAction) => {
    switch (type) {
      case "SET_LANGUAGE":
        setState((prev: IState) => {
          return {
            ...prev,
            language: payload
          }
        })
        break
      case "SET_CURRENCY":
        setState((prev: IState) => {
          return {
            ...prev,
            currency: payload
          }
        })
        break
      case "SET_BLURRED":
        console.log("blur");
        
        setState((prev: IState) => {
          console.log("hihi");
          
          return {
            ...prev,
            isBackgroundBlurred: true,
            test: false
          }
        })
        break
      case "SET_UNBLURRED":
        setState((prev: IState) => {
          return {
            ...prev,
            isBackgroundBlurred: false
          }
        })
        break
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
        {/* <Header />
        <Slider />
        <div className={`blurred-bg ${state.isBackgroundBlurred?"open":""}`}></div> */}
        <BlogPosts />
      </div>
    </AppProvider>
  );
}

export default App;
