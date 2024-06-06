package com.example.restaurant_backend.model;

import java.util.List;

public class Cart {
    private List<Dish> items;
    private double totalPrice;

    public Cart(List<Dish> items, double totalPrice) {
        this.items = items;
        this.totalPrice = totalPrice;
    }

    // Getters and Setters
    public List<Dish> getItems() {
        return items;
    }

    public void setItems(List<Dish> items) {
        this.items = items;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
