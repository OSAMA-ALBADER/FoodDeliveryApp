import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import restaurants from "../data/Restaurants";

const CartCard = ({ route }) => {
  const { menuItem } = route.params;
  // Static items
  const cartItems = [
    // {
    //   id: 1,
    //   name: "Spaghetti Carbonara",
    //   price: 12.99,
    //   quantity: 1,
    //   image:
    //     "https://stefaniaskitchenette.com/wp-content/uploads/2024/07/Carbonara-3-720x1080.webp",
    // },
    // {
    //   id: 2,
    //   name: "Margherita Pizza",
    //   price: 10.99,
    //   quantity: 2,
    //   image:
    //     "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1662539926&width=800",
    // },
  ];
  cartItems.push(menuItem);

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * 1,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={styles.itemDetailsContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {" "}
              ${item.price} x {1}
            </Text>
          </View>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalCost.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "90%",
    alignSelf: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemDetails: {
    fontSize: 16,
    color: "#555",
  },
  totalContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
