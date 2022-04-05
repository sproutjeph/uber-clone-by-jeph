import React, { useEffect } from 'react'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

interface IProps {
  pickupCoord?: number[] | undefined
  dropoffCoord?: number[] | undefined
}

const Map = ({ pickupCoord, dropoffCoord }: IProps) => {
  const addMarkerToMap = (map: any, coords: number[]) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coords).addTo(map)
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [9.082, 8.6753],
      zoom: 3,
    })
    if (pickupCoord) {
      addMarkerToMap(map, pickupCoord)
    }
    if (dropoffCoord) {
      addMarkerToMap(map, dropoffCoord)
    }

    if (pickupCoord && dropoffCoord) {
      map.fitBounds([dropoffCoord, pickupCoord], {
        padding: 60,
      })
    }
  }, [pickupCoord, dropoffCoord])

  return (
    <div id="map" className=" flex-1 bg-gray-300">
      Map
    </div>
  )
}

export default Map
