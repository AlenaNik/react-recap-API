import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" , finished: false }
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/tasks', {
            method: 'post',
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
        event.preventDefault();
    };

    render() {
        return (
          <form onSubmit={this.onSubmit}>
              <input value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <button>Add</button>
          </form>
        )
    }
}

export default Form;