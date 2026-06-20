"use client"
import { addToCart, changeQty, removeCart } from '@/redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux'
export const useCart = () => {
   
    const dispatch = useDispatch();


    const addToCartItem = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
        const cartObj = {
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.thumbnail,
            qty: 1
        }
        dispatch(addToCart(cartObj));
    }

    const removeCartItem = (e,id) => {
         e.stopPropagation();
        e.preventDefault();
        dispatch(removeCart(id));
    }

    const changeItemQty = (type, id, qty) => {
        let finalQty = qty;
        if(type == "+"){
            finalQty = qty + 1;
        }
        else {
            if (qty > 1) {
                finalQty = qty - 1;
            }
        }
        dispatch(changeQty({ id, finalQty }));
    }

    return {
        addToCartItem, removeCartItem, changeItemQty
    }
}