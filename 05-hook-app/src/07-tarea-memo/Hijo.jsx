import React from 'react';

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  I rendered again :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});
