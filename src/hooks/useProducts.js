"use client"
import { getCategories, getCategoryProducts, getProducts } from '@/services/productService';
import React, { useEffect, useState } from 'react'

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [selectCategory , setSelectCategory] = useState("all");
  const [sortOption , setSortOption] = useState("Featured");
  useEffect(() => {
    async function fetchProducts() {
      let request;
      if(selectCategory === "all"){
        request = await getProducts();
      }
      else {
        request = await getCategoryProducts(selectCategory);
      }
      let data = request.data.products;
      if(sortOption === "Price: Low to High"){
        data = data.sort((a, b) => a.price - b.price);
      }
      else if(sortOption === "Price: High to Low"){
        data = data.sort((a, b) => b.price - a.price);
      }
      if(sortOption === "Highest Rated"){
        data = data.sort((a, b) => b.rating - b.rating);
      }
      setProducts([...data])
    }
    fetchProducts();
  }, [selectCategory, sortOption])

  useEffect(() => {
    async function fetchCategoriesProducts() {
      const request = await getCategories();
      setcategory(request.data)
    }
    fetchCategoriesProducts();
  }, [])


  return {
    products, category, selectCategory, setSelectCategory, sortOption, setSortOption
  }
}
