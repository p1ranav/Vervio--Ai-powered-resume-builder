import React from 'react'

const Summary = ({resumeInfo}) => {
  return (
    <p className='text-xs'>{resumeInfo?.summery}</p>
  )
}

export default Summary