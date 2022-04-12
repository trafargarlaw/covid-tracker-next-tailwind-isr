import React from 'react'

interface ProgressProps {
  color: string
  percentage: string
}

const Progress: React.FC<ProgressProps> = ({ color, percentage }) => {
  const containerStyles = {
    width: percentage + '%',
    backgroundColor: color,
  }
  return (
    <div className={`h-1.5 rounded-full`} style={containerStyles}>
      <span></span>
    </div>
  )
}

export default Progress
