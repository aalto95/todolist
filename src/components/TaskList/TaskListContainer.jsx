import React from "react";
import s from './TaskList.module.css'
import TaskList from "./TaskList";
import {connect} from "react-redux";
import {createTask, onTextChange} from "../../redux/tasks-reducer";

const TaskListContainer = props => {
    return (
        <TaskList
            tasks={props.tasks}
            text={props.text}
            createTask={props.createTask}
            onTextChange={props.onTextChange}
        />
    )
}

let mapStateToProps = (store) => {
    return {
        tasks: store.taskList.tasks
    }
}

let mapDispatchToProps = {
    createTask,
    onTextChange
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskListContainer)