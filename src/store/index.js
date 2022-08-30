import { applyMiddleware, combineReducers, createStore } from "redux";
import { incrementReducer } from "./increment_reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    increment: incrementReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);