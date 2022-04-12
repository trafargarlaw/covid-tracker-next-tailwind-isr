import React from 'react'

const Card: React.FC = ({ children }) => {
  return (
    <div className="border-grey-300 mx-2 h-fit w-full space-y-2 rounded-md border bg-white p-6 shadow lg:w-auto  ">
      {children}
    </div>
  )
}

export default Card
