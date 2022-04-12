import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className="border-grey-300 rounded-md border bg-white shadow">
      <div className="m-auto w-[90%] p-2">
        <Image src="/logo.png" alt="logo" width={55} height={55} />
      </div>
    </div>
  )
}

export default SideBar
