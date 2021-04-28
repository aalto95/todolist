import React from "react";

const Input = props => {
    return (
        <form action="">
            <input value={props.state.value}/>
            <button onClick={props.state.pushTask(this.input.value)}>Create</button>
        </form>
    )
}

export default Input