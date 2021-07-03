import React, {useEffect} from "react";
import TaskList from "./TaskList";
import {
    createTask,
    deleteTask,
    onTextChange,
    setTasks,
    toggleIsChecked,
    toggleIsFetching
} from "../../redux/tasks-reducer";
import {todoAPI} from "../../api/api";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";


const TaskListContainer = props => {
    let setTasks = () => {
        props.toggleIsFetching(true)
        todoAPI.getTasks()
            .then(response => {
                props.toggleIsFetching(false)
                console.log(response)
                props.setTasks(response)
            })
    }
    useEffect(setTasks, [])

    if (props.isFetching) return <Preloader />

    return (
        <TaskList
            {...props}
            setTasks={setTasks}
        />
    )
}

let mapStateToProps = (store) => {
    return {
        text: store.taskList.text,
        tasks: store.taskList.tasks,
        isFetching: store.taskList.isFetching
    }
}

let mapDispatchToProps = {
    setTasks,
    createTask,
    onTextChange,
    toggleIsFetching,
    toggleIsChecked,
    deleteTask,
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskListContainer)