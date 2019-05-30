import React, {Component} from 'react';

class List extends Component {
    onClick = taskId => {
        console.log('onClick', taskId);
        const url = 'http://localhost:3000/tasks/' + taskId;
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({ finished: true }),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(json => this.props.onUpdate())
            .catch(err => console.log(err));
    };
    render() {
        const sortedArray =
            this.props.tasks.sort(function(a,b) { return a.finished - b.finished });
        const unfinished = this.props.tasks.filter(task => !task.finished);
        const finished = this.props.tasks.filter(task => task.finished);

        return (
           <ul className="list pl0 ml0 center mw6 br2 fw1 i white-60">
               {sortedArray.map(task =>
                   <li onClick={() => this.onClick(task.id)} className={ task.finished ? 'finished' : '' }>{ task.name } </li>
               ) }
           </ul>
        );
    }
}

export default List;

