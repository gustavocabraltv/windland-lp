import React from 'react'

const Container = ({children, spacing, bg}) => {
  return (
    <div className={`flex flex-col w-full items-center bg-[${bg}]`}>{children}</div>
  )
}

export default Container