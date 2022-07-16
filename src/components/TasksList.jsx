import React from "react";
import './TasksList.css';
import Task from "./Task";
import { useEffect, useState } from "react"; 
import AddTask from "./AddTask";

const TasksList = () => {
    
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect (() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const parsedData = await data.json()
        setLoading(false)
        console.log (parsedData)
        setData(parsedData.slice(0,50))
    }

    const patch = async (task) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${task.id}`, {
        method: 'PATCH',
        body: JSON.stringify(
        {
            "userId": task.userId,
            "id": task.id,
            "title": task.title,
            "completed": !task.completed
        }
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        console.log (await res.json())

        const idcopy = task.id
        const datacopy = data
        console.log (datacopy[idcopy])
        datacopy[idcopy].completed = !task.completed
        setData(datacopy)
    }

    const del = async (task) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${task.id}`, {
        method: 'DELETE',
        body: JSON.stringify(
        {
            "userId": task.userId,
            "id": task.id,
            "title": task.title,
            "completed": task.completed
        }
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        console.log (await res.json())

        const idcopy = task.id
        const datacopy = data
        console.log (datacopy[idcopy])
        delete datacopy[idcopy]
        setData(datacopy)
    }

    const addNewTask = async (text) => {
        console.log(Object.keys(data))
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: 'POST',
        body: JSON.stringify(
        {
            "userId": 100001,
            "id": Object.keys(data).length + 1,
            "title": text,
            "completed": false
        }
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        console.log (await res.json())

    }

    if (loading) return <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><h5>loading...</h5></div>

    return (
        <>
        <p className="addTaskLabel">Add a new task in the list</p>
        <AddTask addNewTask = {addNewTask}/>
        <div className="tasks-container row">
            {
                data.map(task => (
                    <Task task={task} patch={patch} del={del}/>
                ))
            }
        </div>
        </>
    )
}

export default TasksList