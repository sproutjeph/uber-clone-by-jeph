import Link from 'next/link'
import React from 'react'

const ActionButtons = () => {
  const btnData = [
    {
      img: 'https://i.ibb.co/cyvcpfF/uberx.png',
      text: 'Ride',
      alt: 'Uber x Ride',
    },
    {
      img: 'https://i.ibb.co/n776JLm/bike.png',
      text: 'Wheels',
      alt: 'wheels',
    },
    {
      img: 'https://i.ibb.co/5RjchBg/uberschedule.png',
      text: 'Reserve',
      alt: 'Reserve',
    },
  ]
  return (
    <div>
      <div className="flex  space-x-2  ">
        {btnData.map((btn, i) => (
          <Link href="/search" key={i}>
            <button
              className="m-1 flex h-32 flex-1 transform flex-col items-center rounded-lg bg-gray-200 text-xl transition hover:scale-105"
              key={i}
            >
              <img className="h-3/5" src={btn.img} alt={btn.alt} />
              <span>{btn.text}</span>
            </button>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex h-20 items-center bg-gray-200 p-4 text-2xl">
        <button>where to?</button>
      </div>
    </div>
  )
}

export default ActionButtons
