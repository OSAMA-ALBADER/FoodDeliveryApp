import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetResturantItems } from "../api/Restaurants";
import DishDetails from "../component/DishDetailsCard";
import AntDesign from "@expo/vector-icons/AntDesign";
DishDetails;
const Dishes = ({ restaurantId }) => {
  const {
    data: menuItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dishes", restaurantId],
    queryFn: () => GetResturantItems(restaurantId),
  });

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <AntDesign name="loading1" size={24} color="black" />
      </View>
    );
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.menuList}>
        {menuItems?.map((menuItem) => (
          <TouchableOpacity key={menuItem.id}>
            <DishDetails menuItem={menuItem} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Dishes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  menuList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
