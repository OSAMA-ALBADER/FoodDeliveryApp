import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";
import categories from "../data/Categoriest";
import RestaurantCard from "../component/RestaurantCard";
import CategorieCard from "../component/CategorieCard";
import CategoriesList from "./CategoriesList";

const RestaurantList = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Categories */}
      <CategoriesList />

      {/* Restaurants */}
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
