"use client"
import React from 'react'
import { FaArrowLeft, FaCartArrowDown, FaHeart, FaShield, FaStar, FaTruck } from 'react-icons/fa6'
import useProductDetail from '@/hooks/useProductDetail'
import ProductCard from '@/ui/ProductCard'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'

export default function ProductDetail({id}) {
    const { addToCartItem } = useCart()
    const {product, relatedProducts} = useProductDetail(id)
    return (
        <div className='mt-30 px-6'>
            <Link href={"/products"} className='cursor-pointer text-gray-700 flex items-center gap-2 hover:text-black font-medium'><FaArrowLeft /> Back</Link>
            <div className=' shadow-2xl rounded-2xl p-10 my-10 flex md:flex-row flex-col gap-7 items-center'>
                <div className='lg:w-[50%]'>
                    <img src={product?.thumbnail} alt={product?.title} className='rounded-2xl w-full object-cover' />
                </div>
                <div className='md:w-[50%] w-full'>
                    <span className='bg-blue-100 text-blue-500 p-2 rounded-3xl'>{product?.category}</span>

                    <h1 className='font-bold text-3xl my-5'>{product?.title}</h1>
                    <div className='my-5 flex items-center'>

                        <FaStar className='text-yellow-400' />
                        <span className='text-xl font-bold ml-2'>{product?.rating}</span>
                    </div>


                    <p className='font-bold text-3xl text-blue-500'>Rs. {product?.price}</p>
                    <p className='my-5'>{product?.description}</p>
                    <div className='mb-7 flex md:flex-row flex-col items-center gap-3'>
                        <button className='bg-blue-500 text-xl py-2 px-10 text-white rounded-xl md:w-auto w-full flex items-center justify-center gap-5' onClick={(e) => addToCartItem(e, product)}><FaCartArrowDown />Add to Cart</button>
                        <Link href={"/checkout"} className='bg-black  text-xl text-center py-2 px-15 text-white rounded-xl md:w-auto w-full'>Buy Now</Link>
                        <button className='md:w-auto w-full flex justify-center border-2 border-gray-400 rounded-xl p-2'><FaHeart/></button>
                    </div>
                    <hr className='text-gray-200 mb-5' />
                    <p className='mb-5 flex items-center'><FaTruck className='mr-2' />Free shipping on orders over $50</p>
                    <p className='mb-5 flex items-center'><FaShield className='mr-2' />30-day money-back guarantee</p>
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-2xl font-bold'>Related Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-5 '>
                    {
                        relatedProducts.map((item) => (
                            <ProductCard products={item} key={item.id} />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}
