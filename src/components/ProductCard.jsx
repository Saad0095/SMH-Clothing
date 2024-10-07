import React from 'react'

const ProductCard = ({img,name,price}) => {
  return (
    
    <div className='bg-white p-5 w-[315px] rounded-xl shadow-sm dark:bg-black dark:text-white'>
      
      <img className='w-full h-96 object-cover object-top drop-shadow[0_80px_30px_#0007] cursor-pointer hover:scale-105' src={img}alt=""/>
      <div>
        <h2 className='text-2x1 py-3 text-xs'>{name}</h2>
      </div>
      <div className='flex justify-between items-center'>
        <p>
          <span className=' font-base font-bold'>PKR {price}</span>
        </p>

      </div>
    </div>
  )
}

export default ProductCard
