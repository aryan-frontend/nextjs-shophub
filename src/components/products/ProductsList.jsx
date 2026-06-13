import ProductCard from '@/ui/ProductCard';
import React from 'react'

export default function ProductsList({products}) {
  return (
    <div className='py-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
              {
                products.map((item) => (
                  <ProductCard key={item.id} products={item} />
                ))
              }
            </div>
    </div>
  )
}
