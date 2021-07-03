import React, {useEffect} from "react";
import TaskList from "./TaskList";
import {
    addTask, onCheck, onDelete, onEditFinish,
    onTextChange, requestTasks,
    setTasks, toggleEditMode,
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
        isFetching: store.taskList.isFetching,
        editId: store.taskList.editId,
        editMode: store.taskList.editMode,
    }
}

let mapDispatchToProps = {
    setTasks,
    addTask,
    onTextChange,
    toggleIsFetching,
    requestTasks,
    onCheck,
    onDelete,
    toggleEditMode,
    onEditFinish
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskListContainer)