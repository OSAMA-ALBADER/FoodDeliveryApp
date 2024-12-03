import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CategorieCard from "../component/CategorieCard";
import Categories from "../data/Categoriest";
const CategoriesList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {Categories.map((category) => (
          <TouchableOpacity key={category.id}>
            <CategorieCard key={category.id} category={category} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
});
