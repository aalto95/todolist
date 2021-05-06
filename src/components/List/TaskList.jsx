import React from "react";
import s from './TaskList.module.css'

const TaskList = props => {

    return (
      <ul className={s.taskList}>
          {Object.keys(localStorage)
            .sort(function(a, b) { return a - b })
            .map((task) => {
                return <li
                  key={task}
                  className={s.task}
                >
                    {JSON.parse(localStorage.getItem(task)).text}
                    {/*<button onClick={() => {*/}
                    {/*  setTaskCount(taskCount + 1)*/}
                    {/*  localStorage.removeItem(task)*/}
                    {/*}}>×</button>*/}
                    <input type="checkbox"/>
                </li>
            })
          }
      </ul>
    )
}

export default TaskList