import { todosReducer } from "../../src/useReducer/todosReducer";

describe('[todosReducer] - Testing', () => {

    const initialState = [{
        id: 1,
        todo: 'Demo todo',
        done: false
    }];

    test('Should to return the initial state', () => {
        const newState = todosReducer(initialState, {});

        expect(newState).toEqual(initialState);
    });

    test('Should to add a new todo', () => {

        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                todo: 'New todo demo added',
                done: false
            }
        };

        const newState = todosReducer(initialState, action);
        1
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Should to delete one todo', () => {

        const action = {
            type: '[TODO] delete todo',
            payload: 1
        };

        const newState = todosReducer(initialState, action);

        expect(newState.length).toBe(0);

    });

    test('Should to do the toggle of the todo', () => {

        const action = {
            type: '[TODO] toggle todo',
            payload: 1
        };

        const newState = todosReducer(initialState, action);
        
        expect(newState[0].done).toBeTruthy();

        // expect(newState).toContainEqual({
        //     id: 1,
        //     todo: 'Demo todo',
        //     done: true
        // });
    });


});