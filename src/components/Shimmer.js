import { useState } from 'react'

const Shimmer = () => {
  const [arr] = useState(Array(9).fill(1))
  return (
    <div className='flex flex-wrap'>
      {arr.map((a, index) => (
        <div className='w-60 h-80 m-8 bg-gray-300 border-solid border-2 rounded-lg border-gray-500 animate-pulse' key={index}></div>
      ))}
    </div>
  )
}

export default Shimmer
