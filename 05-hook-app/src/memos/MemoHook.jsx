import { Fragment, useState, useMemo } from 'react'
import { useCounter } from '../hooks/useCounter';


const heavyStuff = ( iterationsNumber = 100 ) => {
    for(let i = 0; i < iterationsNumber; i++) {
        console.log('Here we go');
    }

    return `${ iterationsNumber } iteractions done`;
}

const Memorize = () => {

    const { counter, incrementCounter } = useCounter(400);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <Fragment>
        <h1>Counter: <small>{ counter }</small></h1>
        <h4>{ memorizedValue }</h4>
        <hr />
        <button className="btn btn-primary mt-2" onClick={ () => incrementCounter() }>Increment</button>
        <button className="btn btn-outline-primary mt-2" onClick={ () => setShow(!show) }>Show/Hidde { JSON.stringify(show) }</button>
    </Fragment>
  )
}

export default Memorize;