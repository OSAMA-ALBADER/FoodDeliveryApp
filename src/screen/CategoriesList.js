import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "../api/Restaurants";
import CategorieCard from "../component/CategorieCard";
import AntDesign from "@expo/vector-icons/AntDesign";

const CategoriesList = ({ onCategorySelect }) => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: GetAllCategories,
  });

  // console.log(categories);

  const handleCategorySelect = (categoryId) => {
    console.log("Selected category:", categoryId);
    onCategorySelect(categoryId);
  };

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <AntDesign name="loading1" size={24} color="black" />
      </View>
    );
  if (error) return <Text>Error: {error.message}</Text>;

  const categoryList = categories || [];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.categoryCard}
        onPress={() => handleCategorySelect(null)}
      >
        <View style={[styles.image, styles.allCategory]}>
          <Text style={styles.allCategoryText}>All</Text>
        </View>
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>

      {Array.isArray(categoryList) &&
        categoryList.map((category) => (
          <CategorieCard
            key={category._id}
            category={category}
            onPress={() => handleCategorySelect(category._id)}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: "#333",
    fontWeight: "600",
  },
  allCategory: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  allCategoryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesList;
