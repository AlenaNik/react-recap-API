import React from 'react';
import '../App.css';
import List from './List';
import Form from './Form';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tasks:[]}
      this.onUpdate();
    }
onUpdate = () => fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasks => this.setState({tasks: tasks}));

  render() {
    return (
        <div className="App">
          <h1>TO DO</h1>
          <List tasks={this.state.tasks} />
          <Form />
        </div>
    );
  }
}

export default App;