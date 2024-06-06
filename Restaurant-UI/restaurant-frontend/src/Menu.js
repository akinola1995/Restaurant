import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurant/menu')
            .then(response => setMenu(response.data))
            .catch(error => console.error('Error fetching menu:', error));
    }, []);

    const addToCart = (dishId) => {
        axios.post(`http://localhost:8080/api/cart/add/${dishId}`)
            .then(response => console.log('Dish added to cart:', response))
            .catch(error => console.error('Error adding to cart:', error));
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
