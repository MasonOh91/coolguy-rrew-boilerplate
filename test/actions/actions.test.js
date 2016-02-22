import * as actions from '../../app/actions';


// Action tests suite
describe('todo actions', () => {
    // test add_todo action spec
    it('add_todo creates an ADD action', () => {
        expect(actions.add_todo('todo')).toEqual({type: 'ADD_TODO', text: 'todo'});
    });

    // test delete_todo action spec
    it('delete_todo creates a DELETE action', () => {
        expect(actions.delete_todo(1)).toEqual({type: 'DELETE_TODO', id: 1});
    });

    // test edit_todo action spec
    it('edit_todo creates an EDIT action', () => {
        expect(actions.edit_todo(1, 'todo')).toEqual({type: 'EDIT_TODO', id: 1, text: 'todo'});
    });

    // test toggle_completed action spec
    it('toggle_completed creates a TOGGLE action', () => {
        expect(actions.toggle_completed(1, true)).toEqual({type: 'COMPLETE_TODO', id: 1, completed: true});
    });
});
