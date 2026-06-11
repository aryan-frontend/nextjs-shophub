import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function BannerSection() {
  return (
    <section className='bg-linear-to-r from-blue-600 via-purple-600 to-pink-700 py-30 px-6 text-white'>
      <h1 className='text-5xl font-bold mb-5'>Discover Amazing Products</h1>
      <p className='text-2xl mb-10'>Shop the latest trends and find everything you need at unbeatable prices.</p>
      <Link href="/products" className='inline-flex items-center gap-3 bg-white text-blue-500 rounded-xl hover:bg-gray-100 p-3 font-semibold' >Shop Now <FaArrowRightLong /></Link>
    </section>
  )
}
