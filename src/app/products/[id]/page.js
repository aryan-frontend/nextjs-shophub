import ProductDetail from '@/components/products/ProductDetail'
import React from 'react'

export default async function ProductPage({params}) {
    const {id} = await params
  return (
    <div>
        <ProductDetail id={id}/>
    </div>
  )
}
