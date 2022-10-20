import {all} from "redux-saga/effects"
import cartSaga from "./cart/sagas"

function* rootSaga(){
    yield all([cartSaga()])
    
}

export default rootSaga