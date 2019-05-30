import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = { finished: false }
    }
    onClick = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/tasks', {
            method: 'patch',
            body: this.state,
            headers: { 'Content-Type' : 'application/json'}
        })
            .then(res => res.json())
            .then(json => this.props.onClick())
        event.preventDefault();
    };
    render() {
        return (
            <div>
           <ul className="list pl0 ml0 center mw6 br2 fw1 i white-60">
               { this.props.tasks.map(task =>
                   <li className  = { task.finished ? 'finished' : '' }>{ task.name } </li>
               )}
           </ul>
            </div>
        );
    }
}

export default List;