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

    render() {
        return (
            <form>
                <input
                    value={this.state.newTask}
                    onChange={this.handleChange}
                />
                <button>Add to List</button>
            </form>
        )
    }

}

export default TodoForm;