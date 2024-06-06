import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        axios.get('/api/restaurant')
            .then(response => setRestaurant(response.data));
    }, []);

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
        </div>
    );
};

export default Restaurant;
