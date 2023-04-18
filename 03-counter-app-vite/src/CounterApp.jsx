import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    const handleIncrement = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <Fragment>
            <h1>Counter</h1>
            <h2>{ counter }</h2>
            <button aria-label='btn-increment' onClick={ handleIncrement }>+1</button>
            <button aria-label='btn-decrement' onClick={ handleSubtract }>-1</button>
            <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
        </Fragment>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 0
};

export default CounterApp;