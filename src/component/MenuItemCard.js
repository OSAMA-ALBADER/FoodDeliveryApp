import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MenuItemCard = ({ menuItem }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: menuItem.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{menuItem.name}</Text>
        <Text style={styles.price}>{menuItem.price}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: "#ff6f00",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
