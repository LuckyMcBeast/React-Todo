import React from 'react';


const todoList = [
  {
    text: "Make a Todo List",
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
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>{this.state.todoList[0].text}</h3>
      </div>
    );
  }
}

export default App;
