import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Map, RideSelector } from '../../components'

const ComfirmPage = () => {
  const router = useRouter()
  const { pickup, dropoff } = router.query

  const [pickupCoord, setPickupCoord] = useState<number[]>()
  const [dropoffCoord, setDropoffCoord] = useState<number[]>()

  const getPickUpCoordinates = async () => {
    const pickUpLocation = pickup
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUpLocation}.json?` +
      new URLSearchParams({
        access_token: `${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
        limit: '1',
      })

    const response = await fetch(url)

    const data = await response.json()

    setPickupCoord(data.features[0].center)
  }
  const getDropoffCoordinates = async () => {
    const dropoffLocation = dropoff
    const url =
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffLocation}.json?` +
      new URLSearchParams({
        access_token: `${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
        limit: '1',
      })

    const response = await fetch(url)

    const data = await response.json()
    setDropoffCoord(data.features[0].center)
  }

  useEffect(() => {
    getPickUpCoordinates()
    getDropoffCoordinates()
  }, [pickup, dropoff])

  return (
    <>
      <div className="flex h-screen flex-col">
        <Map pickupCoord={pickupCoord} dropoffCoord={dropoffCoord} />
        <div className="mb-4 flex h-1/2 flex-1 flex-col px-4">
          <RideSelector pickupCoord={pickupCoord} dropoffCoord={dropoffCoord} />
        </div>
      </div>
      <div className="absolute top-2 left-4 cursor-pointer rounded-full bg-white">
        <Link href="/">
          <img
            className="h-8"
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt=""
          />
        </Link>
      </div>
    </>
  )
}

export default ComfirmPage
