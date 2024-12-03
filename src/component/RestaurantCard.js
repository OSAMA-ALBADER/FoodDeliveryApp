import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.details}>{restaurant.rating} </Text>
        <Text style={styles.details}>{restaurant.deliveryTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 8,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
});
