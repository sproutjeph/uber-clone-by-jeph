import React from 'react'

interface IProps {
  imgUrl: string
  service: string
  multiplier: number
  rideDuration: number
}

const Car = ({ imgUrl, multiplier, service, rideDuration }: IProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-16" src={imgUrl} alt={service} />
        <div className="ml-2 flex flex-col">
          <span>{service}</span>
          <span className="text-xs text-blue-500">5 mins away</span>
        </div>
      </div>
      <h4 className="">$ {(rideDuration * multiplier).toFixed(2)} </h4>
    </div>
  )
}

export default Car
