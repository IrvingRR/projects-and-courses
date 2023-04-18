import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/useReducer/TodoItem";

describe('[<TodoItem/>] - Testing', () => {


    const todo = {
        id: 1,
        description: 'Demo todo to testing',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should to show the pending todo', () => {

         render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/>);

         const listItem = screen.getByRole('listitem');
         const span = screen.getByLabelText('todo-description');

         expect(listItem.className).toBe('list-group-item d-flex justify-content-between align-items-center');
         expect(span.className).toContain('align-self-center');
         expect(span.className).not.toContain('text-decoration-line-through');

    });

    test('Should to show the completed todo', () => {

        todo.done = true;

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/>);
        
        const span = screen.getByLabelText('todo-description');
        expect(span.className).toContain('text-decoration-line-through');

    });

    test('Should to call the onToggleTodo when span is clicked', () => {

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/>);

        const span = screen.getByLabelText('todo-description');
        fireEvent.click(span);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('Should to call the onDeleteTodo when button is clicked', () => {

        render(<TodoItem todo={ todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock }/>);

        const buttonDelete = screen.getByRole('button', { name: 'Delete' });
        fireEvent.click(buttonDelete);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

});