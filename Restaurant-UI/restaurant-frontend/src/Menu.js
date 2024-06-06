import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('/api/restaurant/menu')
            .then(response => setMenu(response.data));
    }, []);

    const addToCart = (dishId) => {
        axios.post(`/api/cart/add/${dishId}`);
    };

    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {menu.map(dish => (
                    <li key={dish.id}>
                        {dish.name} - ${dish.price.toFixed(2)}
                        <button onClick={() => addToCart(dish.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
