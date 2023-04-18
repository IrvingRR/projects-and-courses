import { useForm } from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
    const { form, onInputChange, onResetForm } = useForm({ description: '' });
    

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(form.description.length <= 1) return console.log('Please fill in the form correctlly');

        const newTodo = {
            id: new Date().getTime() * Math.random() * 1000,
            description: form.description,
            done: false
        };

        onNewTodo(newTodo);
        onResetForm(e);
    };

    return (
        <>
            <h4>Add new todo</h4>
            <hr />
            <form onSubmit={ onFormSubmit }>
                <input type="text" placeholder='Write todo' name="description" className="form-control"  onChange={ onInputChange } value={ form.description }/>
                <button className="btn btn-outline-primary mt-2" type="submit">Create</button>
            </form>
        </>
    )
}

export default TodoAdd;