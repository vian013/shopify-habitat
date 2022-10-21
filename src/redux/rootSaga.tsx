import {all} from "redux-saga/effects"
import cartSaga from "./cart/sagas"
import { quickViewSaga } from "./quickview/sagas"

function* rootSaga(){
    yield all([cartSaga(), quickViewSaga()])
}

export default rootSaga