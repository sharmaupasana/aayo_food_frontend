import React from 'react'

function HomeSectionHeader({title}) {
  return (
    <div className='flex flex-wrap'>
        <div className='font-semibold text-xl border-b-4 text-text border-b-primary'>{title}</div>
    </div>
  )
}

export default HomeSectionHeader