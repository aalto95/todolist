import React from "react";
import {Todo} from "./Todo/Todo";

const List = props => {
    let list = props.state.list.map(todo => <Todo id={todo.id} todo={todo.todo}/> )
    return (
        <div>
            {list}
        </div>
    )
}

export default List