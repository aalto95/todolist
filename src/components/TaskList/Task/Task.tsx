import React, {useState} from "react";
import styles from './Task.module.css'
import trashIcon from "./../../../assets/images/trash.svg"
import {TaskListProps} from "../../../types/types";
import {useRemoveTaskMutation, useUpdateTaskMutation} from "../../../features/api/tasks-api-slice";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {checkToggled, setEditId, todoRemoved, toggleEditMode} from "../../../features/tasks-slice";
const Task: React.FC<TaskListProps> = (props) => {

    const editMode = useAppSelector((state) => state.tasks.editMode)
    const dispatch = useAppDispatch()
    const [removeTask, { isLoading }] = useRemoveTaskMutation()
    const [updateTask] = useUpdateTaskMutation()
    const onCheck = () => {
        const onSuccess = (fulfilled : any) => {
            dispatch(checkToggled(fulfilled))
        }
        props.task && updateTask(props.task).unwrap().then(fulfilled => onSuccess(fulfilled)).catch(rejected => console.error(rejected))
    }

    
    let onDelete = () => {
        const onSuccess = (fulfilled : any) => {
            console.log(fulfilled)
            dispatch(todoRemoved(fulfilled.id))
        }
        removeTask(props.task?.id).unwrap().then(fulfilled => onSuccess(fulfilled)).catch(rejected => console.error(rejected))
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
