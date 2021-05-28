import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasks-reducer";

let reducers = combineReducers({
    tasks: tasksReducer
})

let store = createStore(reducers)

window.store = store

export default store