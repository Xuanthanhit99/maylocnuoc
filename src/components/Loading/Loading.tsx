import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="z-10">
              <Image src="/image/loading-2.gif" width={200} height={200} alt="" className="bg-red"/>
            </div>
            <div className="w-full z-0 h-full bg-red absolute top-0 left-0 bg-black opacity-50"></div>
          </div>  )
}

export default Loading