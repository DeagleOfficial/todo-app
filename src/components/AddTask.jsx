import React from "react";


import './AddTask.css'

const AddTask = (props) => {

    return (
        <>
        
        <div className="AddTask">
            <input type="text" className="form-control" placeholder="Enter the task here"
        
            ></input>
            <button type="button" className="btn btn-md"
            onClick = {(e) => {
                props.addNewTask(e.target.parentElement.childNodes[0].value)
            }}>Submit</button>
        </div>
        </>
    )
}

export default AddTask;