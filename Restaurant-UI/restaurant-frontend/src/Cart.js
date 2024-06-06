import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState({ items: [], totalPrice: 0 });

    useEffect(() => {
        axios.get('/api/cart')
            .then(response => setCart(response.data));
    }, []);

    const checkout = () => {
        axios.post('/api/cart/checkout')
            .then(() => setCart({ items: [], totalPrice: 0 }));
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ${cart.totalPrice.toFixed(2)}</p>
            <button onClick={checkout}>Checkout</button>
        </div>
    );
};

export default Cart;
