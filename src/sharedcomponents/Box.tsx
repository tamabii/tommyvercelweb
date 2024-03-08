import React, { ReactNode } from 'react'

const Box = ({ children } : {
  children: ReactNode
}) => {
  return (
    <div className='container mx-auto max-w-screen-xl'>{children}</div>
  )
}

export default Box