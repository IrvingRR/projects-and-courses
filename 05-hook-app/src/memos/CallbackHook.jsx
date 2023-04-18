import { Fragment, useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const incrementFather = useCallback(
        (value) => {
            setCounter((counter) => counter + value);
        },[]
    );

  return (
    <Fragment>
        <h1>useCallback Hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={ incrementFather }/>
    </Fragment>
  )
}

export default CallbackHook;