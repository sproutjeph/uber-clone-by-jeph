import Link from 'next/link'
import React, { useState } from 'react'

const search = () => {
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')

  return (
    <div className="h-screen bg-gray-200 p-2">
      <Link href="/">
        <div className="mx-auto h-10 max-w-7xl cursor-pointer bg-white px-4">
          <img
            className="h-12"
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back Arrow"
          />
        </div>
      </Link>

      <div className="mx-auto flex max-w-7xl items-center justify-center space-x-4 bg-white p-4">
        <div className="flex flex-col">
          <img
            className="h-5 w-5"
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt=""
          />
          <img
            className="h-10 w-5"
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt=""
          />
          <img
            className="h-5 w-5"
            src="https://img.icons8.com/windows/50/000000/square-full.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col">
          <input
            placeholder="enter pick up location"
            className=" my-2 h-10 rounded-sm border-none bg-gray-200 p-2 capitalize outline-none"
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
          <input
            placeholder="Where to"
            className=" my-2 h-10 rounded-sm border-none bg-gray-200 p-2 capitalize outline-none"
            type="text"
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
          />
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-200">
          <img
            className=""
            src="https://img.icons8.com/ios/50/000000/plus-math.png"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto mt-2 flex max-w-7xl items-center bg-white px-4 py-2">
        <img
          className="mr-2 h-10 w-10 rounded-full bg-gray-400 p-2"
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          alt=""
        />
        <span>Saved Places</span>
      </div>
      <Link
        href={{
          pathname: '/comfirm',
          query: {
            pickup: pickupLocation,
            dropoff: dropoffLocation,
          },
        }}
      >
        <button
          className=" mx-auto mt-2 flex h-10 w-[80%] items-center justify-center rounded-sm bg-black py-1 text-white"
          // onClick={onSubmit}
        >
          Comfirm Location
        </button>
      </Link>
    </div>
  )
}

export default search
