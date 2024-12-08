import React from 'react'
interface details{
    btn : string;
}
const Button = ({btn}:details) => {
  return (
    <div className='bg-pink-600 p-1 max-w-32 text-center text-sm'>
        <p className='text-white font-semibold'>{btn}</p>
    </div>
  )
}

export default Button