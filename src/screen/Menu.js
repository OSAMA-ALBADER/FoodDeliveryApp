import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetResturantByID, GetResturantItems } from "../api/Restaurants";
import MenuItemCard from "../component/MenuItemCard";
import AntDesign from "@expo/vector-icons/AntDesign";

const Menu = ({ route }) => {
  const { restaurantId } = route.params;

  const { data: restaurant } = useQuery({
    queryKey: ["restaurant", restaurantId],
    queryFn: () => GetResturantByID(restaurantId),
  });

  const {
    data: menuItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["menuItems", restaurantId],
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
      <Text style={styles.header}>{restaurant?.name}</Text>
      <ScrollView contentContainerStyle={styles.menuList}>
        {menuItems?.map((menuItem) => (
          <MenuItemCard key={menuItem._id} menuItem={menuItem} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  menuList: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
