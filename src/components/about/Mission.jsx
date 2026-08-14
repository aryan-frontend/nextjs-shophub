import React from 'react'

export default function Mission() {
    return (
        <div className='bg-gray-200 py-20 px-5'>
            <div className='max-w-7xl m-auto grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5'>
                <div className='dark:text-black'>
                    <h2 className='font-bold text-3xl mb-3'>Our Mission</h2>
                    <p className=' mb-3 '>At ShopHub, we believe shopping should be simple, enjoyable, and accessible to everyone. Our mission is to provide high-quality products at competitive prices while delivering an outstanding customer experience.</p>
                    <p>We carefully curate our product selection to ensure every item meets our strict quality standards. From electronics to fashion, home goods to sports equipment, we've got everything you need in one convenient place.</p>
                </div>
                <div className='flex gap-3 max-w-[50%]'>
                    <img src="/images/img1.jpg" alt="img1" className='mb-10 rounded-2xl' />
                    <img src="/images/img2.jpg" alt="img2" className='mt-10 rounded-2xl' />
                </div>
            </div>
        </div>
    )
}
