import { Fragment } from "react";
import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {

    const { counter, incrementCounter, decrementCounter, resetCounter } = useCounter(0);

  return (
    <Fragment>
        <h1>Counter with custom hook</h1>
        <h3>Counter: <span>{ counter }</span></h3>
        <br />
        <button className="btn btn-primary" onClick={ () => incrementCounter(2) }>+1</button>
        <button className="btn btn-danger" onClick={ resetCounter }>Reset</button>
        <button className="btn btn-primary" onClick={ () => decrementCounter(2) }>-1</button>
    </Fragment>
  )
}

export default CounterWithCustomHook;