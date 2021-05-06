import React from "react";
import './App.css';
import TaskList from "./components/List/TaskList";
import AddTask from "./components/AddTask";

const App = props => {
    return (
    <div className="App">
        <TaskList />
        <AddTask />
    </div>
    )
}

export default App;
