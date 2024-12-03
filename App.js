import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RestaurantList from "./src/screen/RestaurantList";
import CategorieCard from "./src/component/CategorieCard";
import CategoriesList from "./src/screen/CategoriesList";
import Menu from "./src/screen/Menu";
import Dishes from "./src/screen/Dishes";
import DishDetailsCard from "./src/component/DishDetailsCard";
import CartCard from "./src/component/CartCard";
import LoginPage from "./src/screen/LoginPage";
import RegisterPage from "./src/screen/RegisterPage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CategoriesList /> */}
      {/* <RestaurantList /> */}
      {/* <Menu /> */}
      {/* <DishDetailsCard /> */}
      {/* <CartCard /> */}
      {/* <LoginPage /> */}
      <RegisterPage />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
