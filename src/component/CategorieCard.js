import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategorieCard = ({ category }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: category.categoryImage }} style={styles.image} />
      <Text style={styles.text}>{category.categoryName}</Text>
    </View>
  );
};

export default CategorieCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: 90,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
