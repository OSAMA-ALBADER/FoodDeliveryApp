import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CategoriesList from "./CategoriesList";
import RestaurantList from "./RestaurantList";
import { useQuery } from "@tanstack/react-query";
import { GetAllResturants } from "../api/Restaurants";

const Home = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const {
    data: restaurants,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: GetAllResturants,
    onSuccess: (data) => {
      setFilteredRestaurants(data);
    },
  });

  const handleCategorySelect = (categoryId) => {
    if (!categoryId) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(
        (restaurant) => restaurant.category === categoryId
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <CategoriesList onCategorySelect={handleCategorySelect} />
      <RestaurantList
        restaurants={filteredRestaurants}
        isLoading={isLoading}
        error={error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default Home;
