import React, { Component } from 'react'

class DataControls extends Component {
    handleKeyPress(e) {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
        this.props.add(e.target.value);
        e.target.value = '';
        }
    };

    handleClick() {
        if (this._input.value.trim() !== '') {
            this.props.add(this._input.value);
            this._input.value = '';  
        }
    };

    componentDidMount() {
        this._input.focus();  
    };

    render() {
        return (
            <div className="data-controls">
                <input type="text" 
                placeholder="enter text" 
                onKeyDown={this.handleKeyPress.bind(this)}
                ref={(input) => {this._input = input}}
                />
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        );
    };
}

export default DataControls
