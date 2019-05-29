import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <div>
           <ul>
               { this.props.tasks.map(task =>
                   <li className  = { task.finished ? 'finished' : '' }>{ task.name } </li>
               )}
           </ul>
            </div>
        );
    }
}

export default List;