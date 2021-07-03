import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://60a0e51dd2855b00173b15c9.mockapi.io/'
})

export const todoAPI = {
    getTasks: () => {
        return instance.get(`todolist`)
            .then(response => {
                return response.data
            })
    },
    createTask: (text) => {
        return instance.post(`todolist`, {text, isChecked: false})
            .then(response => {
                return response.data
            })
    },
    toggleIsChecked: (id, isChecked) => {
        return instance.put(`todolist/${id}`, { isChecked })
            .then(response => {
                console.log(response.data)
                return response.data
            })
    },
    deleteTask: (id) => {
        return instance.delete(`todolist/${id}`)
            .then(response => {
                console.log(response.data)
                return response.data
            })
    },
    editTaskText: (id, text) => {
        return instance.put(`todolist/${id}`, { text })
            .then(response => {
                console.log(response.data)
                return response.data
            })
    }
}