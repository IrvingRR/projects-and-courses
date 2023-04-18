import { useEffect, useReducer } from "react";
import { todosReducer } from "../useReducer/todosReducer";

export const useTodos = () => {
    
    const init = () => JSON.parse(localStorage.getItem('todos')) || [];

    const [todos, dispatch] = useReducer(todosReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
 
    const onNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        };

        dispatch(action);
    }

    const onDeleteTodo = (id) => {
        
        const action = {
            type: '[TODO] delete todo',
            payload: id
        }

        dispatch(action);
    }

    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: id
        }

        dispatch(action);
    }

    return {
        todos,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }

};