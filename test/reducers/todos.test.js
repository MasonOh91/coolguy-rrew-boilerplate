import 'babel-polyfill';
import todos from '../../app/reducers/todos';

describe('todos reducers tests', () => {
    const initial_state = [{id: 1, text: 'todo', completed: false}];

    it('should add a todo to the todo list', () => {
        expect(todos(initial_state, {type: 'ADD_TODO', text: 'todo2'}))
            .toEqual([{id: 1, text: 'todo', completed: false}, {id: 2, text: 'todo2', completed: false}]);
    });

    it('remove a todo from the todo list', () => {
        expect(todos(initial_state, {type: 'DELETE_TODO', id: 1}))
            .toEqual([]);
    });

    it('edit a todo from the todo list', () => {
        expect(todos(initial_state, {type: 'EDIT_TODO', id: 1, text: 'test success'}))
            .toEqual([{id: 1, text: 'test success', completed: false}]);
    });

    it('completed a todo from the todo list', () => {
        const completed_temp = todos(initial_state, {type: 'COMPLETE_TODO', id: 1});
        expect(completed_temp)
            .toEqual([{id: 1, text: 'todo', completed: true}]);

        expect(todos(completed_temp, {type: 'COMPLETE_TODO', id: 1, text: 'todo'}))
            .toEqual([{id: 1, text: 'todo', completed: false}]);
    });
});
