let state = {
    list: [
        { id: 0, todo: 'to create a react app' },
    ],
    pushTask(task) {
        this.list.push(task)
    }
}


export default state