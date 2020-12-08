import React from "react"

const Todo = (props) => {
    console.log(props.todo.complete)
    return (
        <div
            className={`todo${props.todo.complete ? " complete" : ""}`}
            onClick={() => props.toggleTask(props.todo.id)}
            >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo