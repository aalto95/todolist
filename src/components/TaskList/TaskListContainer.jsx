import React, {useEffect} from "react";
import TaskList from "./TaskList";
import {
    addTask,
    deleteTask, onCheck, onDelete,
    onTextChange, requestTasks,
    setTasks,
    toggleIsChecked,
    toggleIsFetching
} from "../../redux/tasks-reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";


const TaskListContainer = props => {

    useEffect(props.requestTasks, [])
    if (props.isFetching) return <Preloader />
    return (
        <TaskList
            {...props}
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
    addTask,
    onTextChange,
    toggleIsFetching,
    requestTasks,
    onCheck,
    onDelete
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskListContainer)