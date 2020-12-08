import React from "react"

import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div className="todo-list">
        {props.todoList.map((task) => (
           <Todo key={task.id} todo={task} toggleTask={props.toggleTask}/> 
        ))}
        <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
};

export default TodoList;