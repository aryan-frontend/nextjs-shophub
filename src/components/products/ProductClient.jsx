"use client"
import React from 'react'
import ProductFilter from './ProductFilter'
import ProductsList from './ProductsList'
import useProducts from '@/hooks/useProducts';

export default function ProductClient() {
    const {products,category, selectCategory,setSelectCategory, sortOption, setSortOption} = useProducts();
    return (
        <>
            <h1 className='font-bold text-3xl pt-30 px-6'>Shop Products</h1>
            <div className='flex flex-col lg:flex-row  '>
                <ProductFilter category={category} selectCategory={selectCategory} setSelectCategory={setSelectCategory} sortOption={sortOption} setSortOption={setSortOption} />
                <ProductsList products={products} />
            </div>
        </>
    )
}
