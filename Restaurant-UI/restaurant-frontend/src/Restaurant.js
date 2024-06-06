import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurant = () => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/restaurant')
            .then(response => setRestaurant(response.data))
            .catch(error => console.error('Error fetching restaurant:', error));
    }, []);

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
        </div>
    );
};

export default Restaurant;