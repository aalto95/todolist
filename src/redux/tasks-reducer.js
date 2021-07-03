import {todoAPI} from "../api/api";

const CREATE_TASK = 'CREATE_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const CHANGE_TEXT = 'CHANGE_TEXT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_CHECKED = 'TOGGLE_IS_CHECKED'
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE'
const SET_TASKS = 'SET_TASKS'

let initialState = {
    text: "",
    tasks: [],
    isFetching: false,
    editText: null,
    editId: null,
    editMode: false
}
const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case CREATE_TASK:
            return {
                ...state,
                ...state.tasks.push(action.task),
                text: ''
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        case TOGGLE_IS_CHECKED:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id
                    ? {...task, isChecked: action.isChecked}
                    : task)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                editId: action.editId,
                editMode: action.editMode
            }
        default:
            return state
    }
}

export let onTextChange = (text) => ({type: CHANGE_TEXT, text})
export let createTask = (task) => ({type: CREATE_TASK, task})
export let setTasks = (tasks) => ({type: SET_TASKS, tasks})
export let toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export let toggleIsChecked = (id, isChecked) => ({type: TOGGLE_IS_CHECKED, id, isChecked})
export let deleteTask = (id) => ({type: DELETE_TASK, id})
export let toggleEditMode = (editId, editMode) => ({type: TOGGLE_EDIT_MODE, editId, editMode})


export let requestTasks = () => async dispatch => {
    let response = await todoAPI.getTasks()
    dispatch(setTasks(response))
}

export let addTask = text => async dispatch => {
    let response = await todoAPI.createTask(text)
    dispatch(createTask(response))
}

export let onCheck = (id, isChecked) => async dispatch => {
    let response = await todoAPI.toggleIsChecked(id, !isChecked)
    dispatch(toggleIsChecked(response.id, response.isChecked))
}

export let onDelete = id => async dispatch => {
    let response = await todoAPI.deleteTask(id)
    dispatch(deleteTask(id))
}

export let onEditFinish = (id, text) => (dispatch) => {
    dispatch(toggleEditMode(id, false))
    todoAPI.editTaskText(id, text)
}

export default tasksReducer