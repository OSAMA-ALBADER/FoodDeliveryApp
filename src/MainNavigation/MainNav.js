import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import RestaurantNavigation from "../navigation/DetailNav/RestaurantNavigation";
import ProfileScreen from "../screen/auth/ProfileScreen";

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
        name="Resturants"
        component={RestaurantNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="food-bank" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
