import React from 'react'

function FoodCard({ name, image, price }) {
    return (
        <div className='flex flex-col gap-3'>
            <img className='w-[15rem] h-[12rem] object-cover rounded-lg shadow-lg' src={image} alt="" />
            <div className="flex justify-between items-center">
                <div className='text-start text-text font-semibold text-md'>{name}</div>
                <div className='text-start text-primary font-semibold text-md'>Rs. {price}</div>
            </div>
        </div>
    )
}

export default FoodCard