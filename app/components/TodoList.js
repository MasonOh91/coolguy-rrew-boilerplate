import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const {delete_todo} = this.props;

        const list_of_data = this.props.data.map((data) => {
            return (<li key={data.id}>{'{'} id: id, text: {data.text} {'}'}<a href="#" onClick={delete_todo.bind(this, data.id)}>[x]</a></li>);
        });
        
        return (
            <div className="displayed-state">
                <h2>Current state:</h2>
                <ul className="data-list">
                    {list_of_data}
                </ul>
            </div>
        );
    };
}

export default TodoList
