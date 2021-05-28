import React, {useEffect} from "react";
import s from './TaskList.module.css'
import {Task} from "./Task/Task";
import AddFieldContainer from "./AddField/AddFieldContainer";

const TaskList = props => {

    let tasks = props.tasks.map((task) => {
        return <Task key={task} text={task}/>
    })

    return (
        <>
            <ul>
                {tasks}
            </ul>
            <AddFieldContainer />
        </>

    )
}

export default TaskList