import React, {useEffect, useRef, useState} from "react";
import s from './AddTask.module.css'

const AddTask = props => {

  const [taskCount, setTaskCount] = useState(localStorage.length > 0 ? Math.max(...Object.keys(localStorage)) + 1 : 0)
  let [taskName, setTaskName] = useState("")
  const handleInput = event => {
    setTaskName(event.target.value);
  };

  return (
    <>
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

      <div className="nigga">
        <label htmlFor="formGroupExampleInput">Input your task</label>
        <input onChange={handleInput} value={taskName}/>
        <button
          disabled={!taskName}
          onClick={() => {
            setTaskCount(taskCount + 1)
            localStorage.setItem(taskCount, JSON.stringify({
              text: taskName,
              createdAt: Date.now()
            }))
            setTaskName(taskName = "")
          }}>
          Add
        </button>
      </div>

    </>
  )
}

export default AddTask