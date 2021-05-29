import React, {useEffect} from "react";
import s from './TaskList.module.css'
import TaskList from "./TaskList";
import {connect} from "react-redux";
import {createTask, onTextChange, setTasks, toggleIsChecked, toggleIsFetching} from "../../redux/tasks-reducer";
import {todoAPI} from "../../api/api";


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
    return ( <>
            {props.isFetching ? <div>loading</div> : <TaskList
            tasks={props.tasks}
            text={props.text}
            createTask={props.createTask}
            onTextChange={props.onTextChange}
            toggleIsChecked={props.toggleIsChecked}
        />}
    </>
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
    toggleIsChecked
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskListContainer)