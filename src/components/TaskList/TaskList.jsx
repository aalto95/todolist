import React from "react";
import {Task} from "./Task/Task";
import styles from './TaskList.module.css'

const TaskList = props => {

    let addTask = (e) => {
        e.preventDefault()
        props.addTask(props.text)
    }

    return (
        <>
            <h1 className={styles.title}>To-Do List</h1>
            <div className={styles.taskWrapper}>
                <div className={styles.taskDescription}>
                    <p>task (double click to edit)</p>
                    <div className={styles.rightAlignedBlock}>
                        <p>status</p>
                        <p>delete</p>
                    </div>
                </div>
                <ul className={styles.taskList}>
                    {props.tasks.map((task) => {
                        return <Task
                            task={task}
                            key={task.id}
                            editMode={props.editMode}
                            editId={props.editId}
                            isChecked={props.isChecked}
                            toggleEditMode={props.toggleEditMode}
                            onEditFinish={props.onEditFinish}
                            onTextChange={props.onTextChange}
                            requestTasks={props.requestTasks}
                            onCheck={props.onCheck}
                            onDelete={props.onDelete}
                        />
                    })}
                </ul>
                <form className={styles.inputPanel} onSubmit={addTask}>
                    <input type="text" value={props.text} className={styles.inputField} onChange={(e) => props.onTextChange(e.target.value)}/>
                    <button type="submit" disabled={!props.text} className={styles.submitBtn}>Add</button>
                </form>
            </div>
        </>
    )
}

export default TaskList