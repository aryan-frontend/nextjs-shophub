import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

export default function ProductCard({ products }) {
  return (
    <Link href={`/products/${products.id}`}>
      <div className="hover:shadow-xl transition bg-white rounded-2xl shadow-md p-5 relative ">
        <img src={products.thumbnail} alt={products.title} />
        <h2 className='text-xl font-bold mb-3'>{products.title}</h2>
        <p>{products.description?.slice(0, 60)}...</p>
        <span className='flex items-center gap-2 mt-3'>
          <FaStar className='text-yellow-400 text-xl' />{products.rating}
        </span>
        <div className='flex items-center justify-between mt-5'>
          <span className='text-2xl text-blue-600 font-bold'>Rs. {products.price}</span>
          <button className='bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700'>Add to Cart</button>
        </div>
        <span className='p-2 bg-gray-300 rounded-2xl absolute right-2 top-1'>{products.category}</span>
      </div>
    </Link>
  )
}
