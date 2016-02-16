import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import TodoList from '../components/TodoList';
import TodoControls from '../components/TodoControls';

class App extends Component {
    render() {
        const { state, actions } = this.props;

        let todoList = '';
        if (state) {
            todoList = <TodoList data={state} delete_todo={actions.delete_todo} />
        }

        return (
            <div className="my-app">
                <h1 className="app-title">Redux Todos</h1>
                <TodoControls add_todo={actions.add_todo} />
                {todoList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state: state.todos};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(Actions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
