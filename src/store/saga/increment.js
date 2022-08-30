import { put, takeEvery } from "redux-saga/effects"
import { ASYNC_INCREMENT_ACTION, incrementActionCreator } from "../increment_reducer"

function* incrementWorker(){
    yield put(incrementActionCreator());
}

export function* incrementWatcher(){
    yield takeEvery(ASYNC_INCREMENT_ACTION, incrementWorker);
}