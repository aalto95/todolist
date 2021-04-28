import React from "react";

export const Todo = props => {
    return (
        <div>
            {props.id + 1 + '. ' + props.todo}
        </div>
    )
}
