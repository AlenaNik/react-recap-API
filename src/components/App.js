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
        <div className="App vh-100 dt w-100 bg-black">
            <div className="dtc v-mid tc white ph3 ph4-l">
          <h1 className="center mw6 br2 fw1 i white-60">TO DO LIST</h1>
          <List tasks={this.state.tasks} onUpdate={this.onUpdate}  />
          <Form onUpdate={this.onUpdate} />
            </div>
        </div>
    );
  }
}

export default App;