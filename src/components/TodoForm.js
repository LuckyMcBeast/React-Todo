import { render } from "@testing-library/react";
import React from "react"

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
        console.log(this.state.newTask)
    }

    sumbitTask = (e) => {
        e.preventDefault();
        this.props.addTask(e, this.state.newTask);
        this.setState({ newTask: "" });
    };

    render() {
        return (
            <form onSubmit={this.sumbitTask}>
                <input
                    value={this.state.newTask}
                    onChange={this.handleChange}
                    name="task"
                    type="text"
                />
                <button>Add to List</button>
            </form>
        )
    }

}

export default TodoForm;