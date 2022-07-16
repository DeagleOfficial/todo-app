import React from "react";
import './Task.css';
import { useState } from "react";

const Task = (props) => {

    const [completed, setCompleted] = useState(props.task.completed)
    const [deleted, setDeleted] = useState(false)

    if (deleted) return <></>;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 task-wrapper">
        <div id = {props.task.id} className={completed ? "task task-completed" : "task"}>
        <p className="task-completed-header">
        <p>Task {props.task.id}</p>
        <p className={completed ? "tick-completed" : "tick"}>&#10003;</p>
        </p> <hr />
        
        
        <div className={completed ? "task-controls task-controls-completed": "task-controls"}>
            <button type="button" className="btn btn-md"
            onClick={(e) => {
                props.patch(props.task)
                setCompleted(!completed)
            }}
            >{completed ? "Mark as incomplete": "Mark as completed"}</button>
            <p
            onClick = {(e) => {
                props.del(props.task)
                setDeleted(true)
            }}
            >Delete</p>
        </div>
        </div>
        </div>
    )
}

export default Task