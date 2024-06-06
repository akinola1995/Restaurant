import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState({ items: [], totalPrice: 0 });

    useEffect(() => {
        axios.get('http://localhost:8080/api/cart')
            .then(response => setCart(response.data))
            .catch(error => console.error('Error fetching cart:', error));
    }, []);

    const checkout = () => {
        axios.post('http://localhost:8080/api/cart/checkout')
            .then(() => setCart({ items: [], totalPrice: 0 }))
            .catch(error => console.error('Error during checkout:', error));
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
