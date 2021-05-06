import React, {useEffect, useRef, useState} from "react";

const AddTask = props => {

  const [taskCount, setTaskCount] = useState(localStorage.length > 0 ? Math.max(...Object.keys(localStorage)) + 1 : 0)
  let [taskName, setTaskName] = useState("")
  const handleInput = event => {
    setTaskName(event.target.value);
  };

  return (
    <div>
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
  )
}

export default AddTask