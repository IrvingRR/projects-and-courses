import { Fragment, useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const setFocus = () => {
        inputRef.current.select();
    };

  return (
    <Fragment>
        <input ref={ inputRef } type="text" placeholder='Ingrese su nombre' className='form-control'/>
        <button className="btn btn-primary mt-2"  onClick={ setFocus }>Set focus</button>
    </Fragment>
  )
}
