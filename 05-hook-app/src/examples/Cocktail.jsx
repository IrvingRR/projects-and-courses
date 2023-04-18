import { Fragment, useLayoutEffect, useRef, useState } from "react";

export const Cocktail = ({ strDrink, strInstructions }) => {

  const paragraphRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = paragraphRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);

  return (
    <Fragment>
      <div className='container text-start'>
          <h3 className='mb-4'>{ strDrink }</h3>
          <p ref={ paragraphRef }>{ strInstructions }</p>
      </div>
      <div className="d-flex flex-column">
        <p>Width: <strong>{ boxSize.width }</strong></p>
        <p>Height: <strong>{ boxSize.height }</strong></p>
      </div>
    </Fragment>
  )
}
