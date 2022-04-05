import React, { useEffect, useState } from 'react'
import Car from '../Car/Car'
import { carList } from '../../carListData'

interface IProps {
  pickupCoord: number[] | undefined
  dropoffCoord: number[] | undefined
}

const RideSelector = ({ dropoffCoord, pickupCoord }: IProps) => {
  const [rideDuration, setRideDuration] = useState(0)

  const getDirection = async () => {
    const url =
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoord![0]},${
        pickupCoord![1]
      };${dropoffCoord![0]},${dropoffCoord![1]}?` +
      new URLSearchParams({
        access_token: `${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      })

    const response = await fetch(url)
    const data = await response.json()
    setRideDuration(data.routes[0].duration / 100)

    console.log(rideDuration)
  }

  useEffect(() => {
    if (dropoffCoord) {
      getDirection()
    }
  }, [dropoffCoord, pickupCoord])

  return (
    <>
      <div className=" flex-1">
        <h1 className="border-b py-2 text-center text-xs text-gray-500">
          Choose aride, or swipe up for more
        </h1>
        {carList.map((car, i) => (
          <Car {...car} rideDuration={rideDuration} key={i} />
        ))}
      </div>
      <button
        className="
        bg-black  py-1 text-xl text-white"
      >
        Comfirm UberX
      </button>
    </>
  )
}

export default RideSelector
