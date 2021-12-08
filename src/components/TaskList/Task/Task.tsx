import React from "react";
import styles from './Task.module.css'
import trashIcon from "./../../../assets/images/trash.svg"
import {TaskType} from "../../../types/types";
import {useRemoveTaskMutation, useCheckTaskMutation, useChangeTaskMutation} from "../../../features/api/tasks-api-slice";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {checkToggled, editTextChanged, setEditId, todoChanged, todoRemoved, toggleEditMode} from "../../../features/tasks-slice";

interface TaskProps {
    key: string
    task: TaskType
}

const Task: React.FC<TaskProps> = (props) => {

    const editMode = useAppSelector((state) => state.tasks.editMode)
    const editId = useAppSelector((state) => state.tasks.editId)
    const editText = useAppSelector((state) => state.tasks.editText)
    const dispatch = useAppDispatch()
    const [removeTask, { isLoading }] = useRemoveTaskMutation()
    const [checkTask] = useCheckTaskMutation()
    const [changeTask] = useChangeTaskMutation()
    const onCheck = () => {
        const onSuccess = (fulfilled : TaskType) => {
            dispatch(checkToggled(fulfilled))
        }
        props.task && checkTask(props.task).unwrap().then(fulfilled => onSuccess(fulfilled)).catch(rejected => console.error(rejected))
    }

    const onDelete = () => {
        const onSuccess = (fulfilled : any) => {
            dispatch(todoRemoved(fulfilled.id))
        }
        removeTask(props.task?.id).unwrap().then(fulfilled => onSuccess(fulfilled)).catch(rejected => console.error(rejected))
    }

    const onEditStart = () => {
        dispatch(toggleEditMode(true))
        dispatch(editTextChanged(props.task?.text))
        dispatch(setEditId(props.task?.id))
    }

    const onEditFinish = () => {
        dispatch(toggleEditMode(false))
        const onSuccess = (fulfilled : TaskType) => {
            dispatch(todoChanged(fulfilled))
        }
        props.task && editText && changeTask({...props.task, text: editText}).unwrap().then(fulfilled => onSuccess(fulfilled)).catch(rejected => console.error(rejected))
    }

    const onEditTextChange = (e : string) => {
        dispatch(editTextChanged(e))
    }

    return (
        <li className={styles.listItem} key={props.task?.id}>
            {
                editMode && editId === props.task?.id
                ?   <input
                        type="text"
                        value={editText}
                        onBlur={onEditFinish}
                        onChange={e => onEditTextChange(e.target.value)}
                    />
                : <p
                        className={styles.taskText}
                        onDoubleClick={onEditStart}
                    >{props.task?.text}</p>
            }
            <div className={styles.functionality}>
                <input type="checkbox" onChange={onCheck} checked={props.task?.isChecked} className={styles.checkBox}/>
                <img src={trashIcon} alt="" className={styles.trashIcon} onClick={onDelete}/>
            </div>
        </li>
    )
}

export default Task
