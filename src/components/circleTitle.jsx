import React from 'react'

function CircleTitle({name, image}) {
  return (
    <div className='flex flex-col gap-3'>
        <img className='w-[10rem] shadow-2xl shadow-black/50 border-[.5rem] border-white h-[10rem] rounded-full object-cover' src={image} />

        <div className='text-center text-text font-semibold text-lg'>{name}</div>
    </div>
  )
}

export default CircleTitle