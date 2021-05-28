import React from "react";
import s from './AddField.module.css'
import AddField from "./AddField";
import {connect} from "react-redux";
import {createTask, onTextChange} from "../../../redux/tasks-reducer";

const AddFieldContainer = props => {
    return (
        <AddField
            text={props.text}
            tasks={props.tasks}
            createTask={props.createTask}
            onTextChange={props.onTextChange}
        />
    )
}

let mapStateToProps = (store) => {
    return {
        text: store.taskList.text,
        tasks: store.taskList.tasks
    }
}

let mapDispatchToProps = {
    onTextChange,
    createTask
}

export default connect(mapStateToProps, mapDispatchToProps) (AddFieldContainer)

