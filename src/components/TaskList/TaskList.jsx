import React from "react";
import {todoAPI} from "../../api/api";
import {Task} from "./Task/Task";
import styles from './TaskList.module.css'

const TaskList = props => {

    let createTask = (e) => {
        e.preventDefault()
        todoAPI.createTask(props.text)
            .then(response => {
                props.createTask(response)
            })
    }
    return (
        <>
            <h1 className={styles.title}>To-Do List</h1>
            <div className={styles.taskWrapper}>
                <div className={styles.taskDescription}>
                    <p>task</p>
                    <div className={styles.rightAlignedBlock}>
                        <p>status</p>
                        <p>delete</p>
                    </div>
                </div>
                <ul className={styles.taskList}>
                    {props.tasks.map((task) => {
                        return <Task
                            task={task}
                            toggleIsChecked={props.toggleIsChecked}
                            deleteTask={props.deleteTask}
                            key={task.id}
                            setTasks={props.setTasks}
                        />
                    })}
                </ul>
                <form className={styles.inputPanel} onSubmit={createTask}>
                    <input type="text" value={props.text} className={styles.inputField} onChange={(e) => props.onTextChange(e.target.value)}/>
                    <button type="submit" disabled={!props.text} className={styles.submitBtn}>Add</button>
                </form>
            </div>
        </>
    )
}

export default TaskList