import { useState } from 'react'

const Shimmer = () => {
  const [arr] = useState(Array(9).fill(1))
  return (
    <div className='shimmer-container'>
      {arr.map((a, index) => (
        <div className='shimer-card' key={index}></div>
      ))}
    </div>
  )
}

export default Shimmer
