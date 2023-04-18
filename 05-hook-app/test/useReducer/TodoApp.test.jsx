import { render, screen } from '@testing-library/react';
import { useTodos } from '../../src/hooks/useTodos';
import TodoApp from '../../src/useReducer/TodoApp';

jest.mock('../../src/hooks/useTodos');

describe('[<TodoApp/>] - Testing', () => {

    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true},
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        onNewTodo: jest.fn(),
        onDeleteTodo: jest.fn(),
        onToggleTodo: jest.fn(),
    });

    test('Should to show the correctly component', () => {

        render(<TodoApp/>);

        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

    });

});