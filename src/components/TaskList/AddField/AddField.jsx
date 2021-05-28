import React from "react";
import s from './AddField.module.css'
import {Task} from "../Task/Task";

const AddField = props => {
    return (
        <div>
            {props.tasks.map((task) => {
                return <li key={task}>{task}</li>
            })}
            <input type="text" value={props.text} onChange={(e) => props.onTextChange(e.target.value)}/>
            <button onClick={() => props.createTask()}>Add</button>
        </div>
    )
}

export default AddField

