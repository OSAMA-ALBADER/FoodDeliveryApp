import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";
import MenuItemCard from "../component/MenuItemCard";

const Menu = () => {
  const selectedRestuarant = restaurants[0];
  return (
    <View style={styles.container}>
      <Text style={styles.header}> {selectedRestuarant.name} </Text>
      <ScrollView contentContainerStyle={styles.menuList}>
        {selectedRestuarant.menuItems.map((menuItem) => (
          <MenuItemCard key={menuItem.id} menuItem={menuItem} />
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
});
