import React, {useState} from "react";
import styles from './Task.module.css'
import trashIcon from "./../../../assets/images/trash.svg"
import {TaskListProps} from "../../../types/types";
import {useRemoveTaskMutation} from "../../../features/api/tasks-api-slice";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {setEditId, toggleEditMode} from "../../../features/tasks-slice";
const Task: React.FC<TaskListProps> = (props) => {

    const editMode = useAppSelector((state) => state.tasks.editMode)

    const dispatch = useAppDispatch()

    let onCheck = () => {
        console.log(props.task?.isChecked)
        props.onCheck(props.task?.id, props.task?.isChecked)
    }

    const [removeTask, { isLoading }] = useRemoveTaskMutation()
    let onDelete = () => {
        removeTask(props.task?.id)
    }

    let onEditStart = () => {
        dispatch(toggleEditMode(true))
        dispatch(setEditId(props.task?.id))
    }

    let onEditFinish = () => {
        props.onEditFinish(props.task?.id, editingText)
    }

    const [editingText, setEditingText] = useState(props.task?.text)

    return (
        <li className={styles.listItem} key={props.task?.id}>
            {
                editMode && props.editId === props.task?.id
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
