const CREATE_TASK = 'CREATE_NEW_TASK'
const CHANGE_TEXT = 'CHANGE_TEXT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_CHECKED = 'TOGGLE_IS_CHECKED'
const SET_TASKS = 'SET_TASKS'


let initialState = {
    text: "",
    tasks: [],
    isFetching: false
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
                ...state.tasks[action.id].isChecked = action.isChecked,
                ...state,
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

export default tasksReducer