const CREATE_TASK = 'CREATE_NEW_TASK'

let initialState = {
    text: ""
}
const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TASK:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

export let createTask = (text) => ({type: CREATE_TASK, text})

export default tasksReducer