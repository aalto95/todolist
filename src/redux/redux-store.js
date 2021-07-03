import {applyMiddleware, combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    taskList: tasksReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store