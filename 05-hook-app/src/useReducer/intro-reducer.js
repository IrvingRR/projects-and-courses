const initalState = [{
    id: 1,
    todo: 'Get soul stone',
    done: false
}];

const todoReducer = (state = initalState, action = {}) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload];

        case '[TODO] delete todo':
            return state.filter(todo => todo.id !== action.payload);

    }

    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Get power stone',
    done: false
};

const actionAddTodo = {
    type: '[TODO] add todo',
    payload: newTodo
};

todos = todoReducer(initalState, actionAddTodo);

const actionDeleteTodo = {
    type: '[TODO] delete todo',
    payload: 1
};

todos = todoReducer(todos, actionDeleteTodo);

console.log(todos);