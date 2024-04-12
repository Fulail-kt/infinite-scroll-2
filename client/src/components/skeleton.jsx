import React from 'react'

const Skeleton = () => {
  return (
    <div className='w-full flex items-center mt-4 flex-col gap-4 p-4 md:p-0 md:flex-row md:items-start'>
      <div className='animate-pulse h-32 md:h-32 w-60 md:w-52 bg-gray-200 rounded-lg'></div>
      <div className='w-60 md:w-2/4'>
        <div className='h-6 bg-gray-200 rounded'></div>
        <div className='h-4 bg-gray-200 rounded w-3/4 mt-2'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2 mt-1'></div>
      </div>
    </div>
  )
}

export default Skeleton


