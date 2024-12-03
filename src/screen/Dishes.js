import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";
import DishDetails from "../component/DishDetailsCard";
DishDetails;
const Dishes = ({ dish }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.menuList}>
        {restaurants.menuItems.map((menuItem) => (
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
});
