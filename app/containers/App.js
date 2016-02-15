import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import ViewData from '../components/ViewData';
import DataControls from '../components/DataControls';

class App extends Component {
    render() {
        const { state, actions } = this.props;

        return (
            <div className="my-app">
                <h1 className="app-title">Hello Redux</h1>
                <DataControls add={actions.add_data} />
                <ViewData data={state} />
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {state: state.data};
};

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(Actions, dispatch)};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
