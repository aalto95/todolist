import React from "react";
import './App.css';
import TaskList from "./components/List/TaskList";
import AddField from "./components/AddField/AddField";

const App = props => {
    return (
    <div className="App">
        <TaskList />
        <AddField />
    </div>
    )
}

export default App;
