import React from "react";
import styles from './Task.module.css'
import {todoAPI} from "../../../api/api";
import trashIcon from "./../../../assets/images/trash.svg"

export const Task = props => {

    let onCheck = () => {
        props.onCheck(props.task.id, props.task.isChecked)
    }

    let onDelete = () => {
        props.onDelete(props.task.id)
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
