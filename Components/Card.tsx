import React from 'react'

const Card: React.FC = ({ children }) => {
  return (
    <div className="border-grey-300 h-fit w-96 space-y-2 rounded-md border bg-white p-6 shadow  ">
      {children}
    </div>
  )
}

export default Card
