import * as action_types from '../constants/ActionTypes'

export function add_todo(text) {
    return { type: action_types.ADD_TODO, text };
}

export function delete_todo(id) {
    return { type: action_types.DELETE_TODO, id };
}

export function edit_todo(id, text) {
    return { type: action_types.EDIT_TODO, id, text };
}

export function toggle_completed(id, completed) {
    return { type: action_types.COMPLETE_TODO, id, completed };
}
