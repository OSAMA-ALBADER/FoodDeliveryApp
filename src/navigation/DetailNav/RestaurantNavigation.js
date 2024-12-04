import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantList from "../../screen/RestaurantList";
import Menu from "../../screen/Menu";
import { useNavigation } from "@react-navigation/native";
import CartCard from "../../component/CartCard";
import DishDetailsCard from "../../component/DishDetailsCard";

const Stack = createNativeStackNavigator();

const RestaurantNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="RestaurantList">
      <Stack.Screen name="RestaurantList" component={RestaurantList} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Dishes" component={DishDetailsCard} />
      <Stack.Screen name="Cart" component={CartCard} />
    </Stack.Navigator>
  );
};

export default RestaurantNavigation;

const styles = StyleSheet.create({});
