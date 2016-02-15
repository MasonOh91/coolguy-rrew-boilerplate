import React, { Component } from 'react';

class ViewData extends Component {
    render() {
        const list_of_data = this.props.data.map((data) => {
            return (<li key={data.id}>{'{'} id: {data.id}, text: {data.text} {'}'}</li>);
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

export default ViewData
