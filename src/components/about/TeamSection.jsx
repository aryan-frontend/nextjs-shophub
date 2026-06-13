import { teamMembers } from '@/data/aboutdata'
import React from 'react'

export default function TeamSection() {
    return (
        <div className='py-15 px-6 mx-auto'>
            <h2 className='font-bold text-4xl text-center'>Meet Our Team</h2>
            <p className='my-5 text-center'>The people behind your great shopping experience</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 items-baseline mt-10'>
                {
                    teamMembers.map((item, idx) => (
                        <div className='flex flex-col items-center text-center' key={idx}>
                            <img src={item?.img} alt={item?.name} className='h-52 w-52 rounded-full mb-3' />
                            <h3 className='font-bold '>{item?.name}</h3>
                            <p>{item?.post}</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
