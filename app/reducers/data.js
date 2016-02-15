import * as action_types from '../constants/ActionTypes';

const initial_state = [
    {
        id: 1,
        text: 'beep boop beep'
    },
    {
        id: 0,
        text: 'beep boop'
    }
];

export default function reducer(state = initial_state, action) {
    switch(action.type) {
        case action_types.ADD_DATA:
            return [
                {
                    id: state.reduce((maxId, state_item) => Math.max(state_item.id, maxId), -1) + 1,
                    text: action.text
                },
                ...state 
            ];
        default:
            return state;
    }
}
