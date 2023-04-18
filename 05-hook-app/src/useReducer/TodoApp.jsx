import { useTodos } from "../hooks/useTodos";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoApp = () => {   

    const { todos, onNewTodo, onDeleteTodo, onToggleTodo, todosCount, pendingTodosCount } = useTodos();

    return (
    <>
        <h4 className="d-flex justify-content-between align-items-center">TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h4>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo }/>
            </div>

            <div className="col-5">
               <TodoAdd onNewTodo={ onNewTodo }/>
            </div>
        </div>
        
    </>
  )
}

export default TodoApp;