import { Fragment, useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import Small from './Small';

const Memorize = () => {

    const { counter, incrementCounter } = useCounter(10);
    const [show, setShow] = useState(true);

  return (
    <Fragment>
        <h1>Counter: <Small value={ counter }/></h1>
        <hr />
        <button className="btn btn-primary mt-2" onClick={ () => incrementCounter() }>Increment</button>
        <button className="btn btn-outline-primary mt-2" onClick={ () => setShow(!show) }>Show/Hidde { JSON.stringify(show) }</button>
    </Fragment>
  )
}

export default Memorize;