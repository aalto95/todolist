import React from "react";
import './App.css';
import AddFieldContainer from "./components/TaskList/AddField/AddFieldContainer";
import TaskListContainer from "./components/TaskList/TaskListContainer";

const App = props => {
    return (
    <div className="App">
        <TaskListContainer />
    </div>
    )
}

export default App;
