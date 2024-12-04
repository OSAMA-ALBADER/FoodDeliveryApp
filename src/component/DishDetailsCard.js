import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";
import { useNavigation } from "@react-navigation/native";

const DishDetailsCard = ({ route }) => {
  const { menuItem } = route.params;
  // const menuItem = restaurants[0].menuItems[0];
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={{ uri: menuItem.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.details}>${menuItem.price.toFixed(2)}</Text>
        <Text style={styles.details}>{menuItem.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cart", { menuItem })}
      >
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDetailsCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  details: {
    fontSize: 12,
    color: "#666",
  },
  button: {
    flexDirection: "row",
    margin: 16,
    padding: 8,
    backgroundColor: "#ff6f00",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
