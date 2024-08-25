import React from 'react'

function container({children}) {
  return (
    <div>
      <div className='w-full max-w-7xl'>{children}</div>
      
    </div>
  )
}

export default container
