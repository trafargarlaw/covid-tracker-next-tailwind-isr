import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className="border-grey-300  w-full rounded-md border bg-white shadow">
      <div className="p-2 ml-12">
        <Image src="/logo.png" alt="logo" width={55} height={55} />
      </div>
    </div>
  )
}

export default SideBar
