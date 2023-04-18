import { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = counter;

    const incrementCounter1 = () => {
        setCounter({ 
            ...counter, 
            counter1: counter1 + 1 
        });
    }

  return (
    <div>
        <h3>Counter 1: { counter1 }</h3>
        <h3>Counter 2: { counter2 }</h3>
        <h3>Counter 3: { counter3 }</h3>

        <button className="btn btn-primary" onClick={ incrementCounter1 }>+1</button>
    </div>
  )
}

export default Counter;