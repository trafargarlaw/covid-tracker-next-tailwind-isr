import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  return (
    <div className="border-grey-300 fixed  h-screen w-20 rounded-md border bg-white shadow  ">
      <div className="p-2">
        <Image src="/logo.png" alt="logo" width={80} height={80} />
      </div>
    </div>
  )
}

export default SideBar
