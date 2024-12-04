import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantList from "../../screen/RestaurantList";
import Menu from "../../screen/Menu";
import { useNavigation } from "@react-navigation/native";
import CartCard from "../../component/CartCard";
import DishDetailsCard from "../../component/DishDetailsCard";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Stack = createNativeStackNavigator();

const RestaurantNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="RestaurantList">
      <Stack.Screen
        name="RestaurantList"
        component={RestaurantList}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Resturants", {
                    screen: "Cart",
                    // Static Item
                    params: {
                      menuItem: {
                        id: 12,
                        name: "Margherita Pizza",
                        price: 10.99,
                        image:
                          "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1662539926&width=800",
                        description:
                          "Classic pizza with tomato, mozzarella, and fresh basil.",
                      },
                    },
                  });
                }}
              >
                <MaterialIcons name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Dishes" component={DishDetailsCard} />
      <Stack.Screen name="Cart" component={CartCard} />
    </Stack.Navigator>
  );
};

export default RestaurantNavigation;

const styles = StyleSheet.create({});
