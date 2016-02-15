import * as action_types from '../constants/ActionTypes'

export function add_data(text) {
  return { type: action_types.ADD_DATA, text }
}