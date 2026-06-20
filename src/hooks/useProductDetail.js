"use client"
import { getCategoryProducts, getSingleProduct } from '@/services/productService';
import React, { useEffect, useState } from 'react'

export default function useProductDetail(id) {
    const [product , setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
        async function fetchSingleProduct() {
            const request = await getSingleProduct(id);
            setProduct(request.data);
            console.log(request.data);
        }
        if(id){
            fetchSingleProduct();
        }
    }, [id])

    useEffect(() => {
        if (!product?.category) return;
        async function fetchRelatedProducts() {
            const res = await getCategoryProducts(product.category);
            let request = res.data.products
            let filtered = request.filter((item) => item.id !== Number(id));
            setRelatedProducts(filtered.slice(0,4))
        }
        fetchRelatedProducts()
    }, [product, id])
  return {
    product, relatedProducts
  }
}
