package com.example.restaurant_backend.service;

import com.example.restaurant_backend.model.Dish;
import com.example.restaurant_backend.model.Restaurant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {
    public Restaurant getRestaurant() {
        return new Restaurant("1", "The Gourmet Kitchen", "123 Food Street, Flavor Town");
    }

    public List<Dish> getMenu() {
        return List.of(
                new Dish("1", "Spaghetti Carbonara", 15.99),
                new Dish("2", "Margherita Pizza", 12.99),
                new Dish("3", "Caesar Salad", 10.99),
                new Dish("4", "Grilled Salmon", 18.99),
                new Dish("5", "Chocolate Lava Cake", 8.99)
        );
    }
}