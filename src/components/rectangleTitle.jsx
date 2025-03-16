import React from 'react'

function RectangleTitle({name, image}) {
  return (
    <div className='flex flex-col gap-3'>
        <img className='w-[15rem] h-[12rem] object-cover rounded-lg shadow-lg' src={image} alt="" />
        <div className='text-start text-text font-semibold text-md'>{name}</div>
    </div>
  )
}

export default RectangleTitle