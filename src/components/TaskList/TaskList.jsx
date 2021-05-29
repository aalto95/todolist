import React from "react";
import s from './TaskList.module.css'
import {todoAPI} from "../../api/api";
import {Task} from "./Task/Task";

const TaskList = props => {

    let createTask = () => {
        todoAPI.createTask(props.text)
            .then(response => {
                props.createTask(response)
            })
    }
    return (
        <div>
            {props.tasks.map((task) => {
                return <Task key={task.id} task={task} toggleIsChecked={props.toggleIsChecked}/>
            })}
            <input type="text" value={props.text} onChange={(e) => props.onTextChange(e.target.value)}/>
            <button onClick={createTask}>Add</button>
        </div>
    )
}

export default TaskList