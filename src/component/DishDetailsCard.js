import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DishDetailsCard = ({ route }) => {
  const { menuItem } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: menuItem.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.details}>${menuItem.price.toFixed(2)}</Text>
          <Text style={styles.details}>{menuItem.description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Cart", { menuItem })}
          >
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DishDetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 20,
    gap: 15,
  },
  details: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#ff6f00",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
