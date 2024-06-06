package com.example.restaurant_backend.controller;

import com.example.restaurant_backend.model.Dish;
import com.example.restaurant_backend.model.Restaurant;
import com.example.restaurant_backend.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping
    public Restaurant getRestaurant() {
        return restaurantService.getRestaurant();
    }

    @GetMapping("/menu")
    public List<Dish> getMenu() {
        return restaurantService.getMenu();
    }
}