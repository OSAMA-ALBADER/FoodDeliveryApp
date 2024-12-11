import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { GetAllResturants, GetAllCategories } from "../api/Restaurants";
import RestaurantCard from "../component/RestaurantCard";
import CategoriesList from "./CategoriesList";
import AntDesign from "@expo/vector-icons/AntDesign";

const RestaurantList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    data: restaurants,
    isLoading: isLoadingRestaurants,
    error: errorRestaurants,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: GetAllResturants,
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: GetAllCategories,
  });

  if (isLoadingRestaurants || isLoadingCategories)
    return (
      <View style={styles.loadingContainer}>
        <AntDesign name="loading1" size={24} color="black" />
      </View>
    );
  if (errorRestaurants || errorCategories)
    return (
      <Text>
        Error: {errorRestaurants?.message || errorCategories?.message}
      </Text>
    );

  // Filtirng restaurants based on the selected category
  const filteredRestaurants = selectedCategory
    ? categories.find((category) => category._id === selectedCategory)
        ?.restaurants || []
    : restaurants;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.categoriesContainer}>
          <CategoriesList onCategorySelect={setSelectedCategory} />
        </View>
        <View style={styles.restaurantsContainer}>
          {filteredRestaurants?.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  categoriesContainer: {
    height: 100,
  },
  restaurantsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
