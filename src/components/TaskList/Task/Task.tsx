import React, {useState} from "react";
import styles from './Task.module.css'
import trashIcon from "./../../../assets/images/trash.svg"
import {TaskListProps} from "../../../types/types";
const Task: React.FC<TaskListProps> = (props) => {

    let onCheck = () => {
        console.log(props.task?.isChecked)
        props.onCheck(props.task?.id, props.task?.isChecked)
    }

    let onDelete = () => {
        props.onDelete(props.task?.id)
    }

    let onEditStart = () => {
        props.toggleEditMode(props.task?.id, true)
    }

    let onEditFinish = () => {
        props.onEditFinish(props.task?.id, editingText)
    }

    const [editingText, setEditingText] = useState(props.task?.text)

    return (
        <li className={styles.listItem} key={props.task?.id}>
            {
                props.editMode && props.editId === props.task?.id
                ?   <input
                        type="text"
                        value={editingText}
                        onBlur={onEditFinish}
                        onChange={e => setEditingText(e.target.value)}
                    />
                : <p
                        className={styles.taskText}
                        onDoubleClick={onEditStart}
                    >{editingText}</p>
            }
            <div className={styles.functionality}>
                <input type="checkbox" onChange={onCheck} checked={props.task?.isChecked} className={styles.checkBox}/>
                <img src={trashIcon} alt="" className={styles.trashIcon} onClick={onDelete}/>
            </div>
        </li>
    )
}

export default Task
