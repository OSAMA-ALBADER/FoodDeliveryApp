import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const CategorieCard = ({ category, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image
          source={{ uri: category.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

export default CategorieCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    borderRadius: 100,
    backgroundColor: "white",
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    color: "#333",
    fontWeight: "600",
  },
});
