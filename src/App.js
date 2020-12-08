import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const todoList = [
  {
    task: "Make a Todo List",
    id : `${Date.now()}`,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList
    };
  }
  
  addTask = (e, item) => {
    console.log("Adding Todo Task");
    e.preventDefault();
    const newTask = {
      task: item,
      id : `${Date.now()}`,
      complete: false
    };
    console.log(newTask)
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTask]
    });
    console.log(this.state)
  };
  
  toggleTask = (taskId) => {
    this.setState({
        ...this.state,
        todoList: this.state.todoList.map((task) => {
          if(taskId === task.id){
            return {
              ...task,
              complete: !task.complete
            }; 
          } else {
            return task;
          }
        })
    })
}

  clearCompleted = (e) =>{
    e.preventDefault();
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter((task) => !task.complete)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList todoList={this.state.todoList} 
          toggleTask={this.toggleTask} 
          clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
