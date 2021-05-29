import React, {useState} from "react";
import styles from './Task.module.css'
import {todoAPI} from "../../../api/api";

export const Task = props => {
    let onCheck = () => {
        todoAPI.toggleIsChecked(props.task.id, !props.task.isChecked)
            .then(response => {
                props.toggleIsChecked(response.id, response.isChecked)
            })
    }
    return (
        <li className={styles.listItem}>
            <p>{props.task.text}</p>
            <input type="checkbox" onChange={onCheck} checked={props.task.isChecked}/>
        </li>

    )
}
