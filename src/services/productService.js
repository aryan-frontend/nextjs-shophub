import api from "./api";

export const getProducts = () => api.get('/products');
export const getCategories = () => api.get('/products/categories');
export const getCategoryProducts = (category) => api.get(`/products/category/${category}`);