"use client"
import useProducts from '@/hooks/useProducts'
import ProductCard from '@/ui/ProductCard'
import React from 'react'

export default function LatestProducts() {
  const { products } = useProducts();
  return (
    <section className='bg-gray-50 py-10'>
      <h2 className='text-2xl font-bold py-10 px-5'>Latest Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5'>
        {
          products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} products={item} />
          ))
        }
      </div>
    </section>
  )
}
