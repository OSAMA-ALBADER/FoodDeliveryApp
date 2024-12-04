import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../screen/LoginPage";
import Feather from "@expo/vector-icons/Feather";
import RestaurantList from "../screen/RestaurantList";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AuthNavigation from "../navigation/AuthNav/AuthNavigation";
import RestaurantNavigation from "../navigation/DetailNav/RestaurantNavigation";

const Tab = createBottomTabNavigator();
const MainNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F98524",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Login"
        component={AuthNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Resturants"
        component={RestaurantNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="food-bank" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
