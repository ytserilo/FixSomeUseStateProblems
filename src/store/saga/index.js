import { all } from "redux-saga/effects";
import { incrementWatcher } from "./increment";

export function* rootWatcher(){
    yield all([
        incrementWatcher()
    ]);
}