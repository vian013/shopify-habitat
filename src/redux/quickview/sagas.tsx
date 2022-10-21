import { all, put, takeEvery } from "redux-saga/effects";
import { openSidebar, setSidebarContent } from "../sidebar/actions";
import { setQuickViewHandle } from "./actions";
import { QuickViewActions } from "./types";

function* openQuickViewSaga(action: {type: string, payload: string}) {
    yield put(openSidebar())
    yield put(setQuickViewHandle(action.payload))
    yield put(setSidebarContent("quickview"))
}

function* watchOpenQuickView() {
    yield takeEvery(QuickViewActions.OPEN_QUICK_VIEW, openQuickViewSaga )
}

function* quickViewSaga() {
    yield all([watchOpenQuickView()])
}

export {
    quickViewSaga
}