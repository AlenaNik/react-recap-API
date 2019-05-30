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
            body: JSON.stringify(this.state),
            headers: { 'Content-Type' : 'application/json'}
        })
            .then(res => res.json())
            .then(json => this.props.onUpdate())
            .catch(err => console.log(err));
        event.preventDefault();
    };

    render() {
        return (
          <form onSubmit={this.onSubmit} className="pa4">
              <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"/>
                <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Add</button>
          </form>
        )
    }
}

export default Form;