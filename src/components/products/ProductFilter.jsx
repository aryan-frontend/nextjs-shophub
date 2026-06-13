import React from 'react'
import { CiFilter } from 'react-icons/ci'

export default function ProductFilter({ category, selectCategory, setSelectCategory, sortOption, setSortOption }) {

    return (
        <div className='p-6'>
            <div className=' shadow-2xl bg-white p-6 rounded-xl md:sticky top-18'>
                <span className='flex items-center gap-2  text-xl' ><CiFilter />Filter</span>
                <div className='my-6'>
                    <label className='font-bold text-xl'>Categories</label>
                    <select className='p-3 mt-2 border rounded-2xl w-full' name="categories" id="categories" onChange={(e) => setSelectCategory(e.target.value)} value={selectCategory} >
                        <option value="all">All</option>
                        {
                            category.map((cat, idx) => (
                                <option key={idx} value={cat.slug}>{cat.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label className='text-xl font-bold'>sort By</label>
                    <select className='p-3 mt-2 border rounded-2xl w-full' onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
