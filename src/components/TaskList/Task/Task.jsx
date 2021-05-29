import React, {useState} from "react";
import styles from './Task.module.css'
import {todoAPI} from "../../../api/api";
import trashIcon from "./../../../assets/images/trash.svg"

export const Task = props => {

    let onCheck = () => {
        todoAPI.toggleIsChecked(props.task.id, !props.task.isChecked)
            .then(response => {
                //props.toggleIsChecked(response.id, response.isChecked)
                props.setTasks()
            })
    }

    let onDelete = () => {
        todoAPI.deleteTask(props.task.id)
            .then(response => {
                props.deleteTask(response.id)
                props.setTasks()
            })
    }
    return (
        <li className={styles.listItem} key={props.task.id} >
            <p className={styles.taskText}>{props.task.text}</p>
            <div className={styles.functionality}>
                <input type="checkbox" onChange={onCheck} checked={props.task.isChecked} className={styles.checkBox}/>
                <img src={trashIcon} alt="" className={styles.trashIcon} onClick={onDelete}/>
            </div>
        </li>

    )
}
