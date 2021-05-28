const CREATE_TASK = 'CREATE_NEW_TASK'
const CHANGE_TEXT = 'CHANGE_TEXT'

let initialState = {
    text: "",
    tasks: ['to do dishes', 'to create an app']
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
                ...state.tasks.push(state.text),
                text: ''
            }
        default:
            return state
    }
}

export let onTextChange = (text) => ({type: CHANGE_TEXT, text})
export let createTask = (text) => ({type: CREATE_TASK, text})

export default tasksReducer