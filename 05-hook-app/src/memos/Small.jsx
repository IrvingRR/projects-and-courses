import { memo } from 'react'

const Small = memo(({ value }) => {

    console.log('I rendered me again :(');

  return (
    <small>{ value }</small>
  )
})

export default Small;