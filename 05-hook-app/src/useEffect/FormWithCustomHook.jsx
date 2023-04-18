import { Fragment, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import Message from './Message';

const FormWithCustomHook = () => {

   const { form, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

  return (
    <Fragment>
        <h2>Form with custom hook</h2>
        <form>
            <input type="text" className="form-control" name='username' placeholder='Username' autoComplete='off' onChange={ onInputChange } value={ form.username }/>
            <input type="email" className="form-control mt-2" name='email' placeholder='Email address' autoComplete='off' onChange={ onInputChange } value={ form.email }/>
            <input type="password" className="form-control mt-2" name='password' placeholder='Password' autoComplete='off' onChange={ onInputChange } value={ form.password }/>
            <button className="btn btn-danger mt-2" onClick={ onResetForm }>Reset</button>
        </form>
    </Fragment>
  )
}

export default FormWithCustomHook;