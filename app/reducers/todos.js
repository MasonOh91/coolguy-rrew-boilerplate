import * as action_types from '../constants/ActionTypes';

const initial_state = [{
    id: 0,
    text: 'beep boop',
    completed: false
}];

export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case action_types.ADD_TODO:
        return [
        ...state,
        {id: state.reduce((maxId, state_item) => Math.max(state_item.id, maxId), -1) + 1,
            text: action.text,
            completed: false
        }
        ];
        case action_types.DELETE_TODO:
            return state.filter(todo => {
                return todo.id !== action.id;
            });
        case action_types.EDIT_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        text: action.text
                    });
                }
                return todo;
            });
        case action_types.COMPLETE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}
