import { loadCart } from '@/redux/features/cart/cartSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function CartLoader() {
  const dispatch = useDispatch();

    useEffect(() => {
        const cart = JSON.parse(
            localStorage.getItem("CART") || "[]"
        );

        dispatch(loadCart(cart));
    }, [dispatch]);

    return null;
}
