import { Fragment, useEffect, useState } from 'react'
import Message from './Message';

const SimlpeForm = () => {

    const [form, setForm] = useState({
        username: 'IrvingRR',
        email: 'irving@gmail.com'
    });

    const onInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        // console.log(form);
    },[]);

  return (
    <Fragment>
        <h2>Simple Form</h2>
        <form>
            <input type="text" className="form-control" name='username' placeholder='Username' autoComplete='off' onChange={ onInputChange } value={ form.username }/>
            <input type="email" className="form-control mt-2" name='email' placeholder='Email address' autoComplete='off' onChange={ onInputChange } value={ form.email }/>
            { (form.username === 'IrvingRR2') && <Message/>}
        </form>
    </Fragment>
  )
}

export default SimlpeForm;