import React from 'react'

const Card: React.FC = ({ children }) => {
  return (
    <div className="border-grey-300 max-h-96 max-w-sm space-y-2 rounded-md border bg-white p-4 shadow  ">
      {children}
    </div>
  )
}

export default Card
