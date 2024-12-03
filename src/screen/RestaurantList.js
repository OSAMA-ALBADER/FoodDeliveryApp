import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";
import RestaurantCard from "../component/RestaurantCard";

const RestaurantList = () => {
  return (
    <ScrollView style={styles.container}>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
