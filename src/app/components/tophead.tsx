import React from 'react'
interface descript{
    page:string,
    route:string
}
const Tophead = ({page, route}:descript) => {
  return (
    <div>
        <div className='bg-[#d5d2ff] p-10 py-20'>
            <h1 className='text-[#151875] font-bold text-2xl'>{page}</h1>
            <div className='flex flex-row font-semibold text-sm'><p className='text[#151875]'>Home.Page.</p><p className='text-pink-600'>{route}</p></div>
        </div>
    </div>
  )
}

export default Tophead