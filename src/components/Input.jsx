import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import 'firebase/firestore'

const firestore = firebase.firestore()

const Input = props => {
    const dummy = useRef()
    const tasksRef = firestore.collection('tasks')
    console.log(tasksRef)
    return (
        <form action="">
            <input value={props.state.value}/>
            <button>Create</button>
        </form>
    )
}

export default Input