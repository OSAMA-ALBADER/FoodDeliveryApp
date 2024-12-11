import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "../../screen/auth/RegisterPage";
import LoginPage from "../../screen/auth/LoginPage";
import MainNav from "../../MainNavigation/MainNav";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginPage}
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen
        name="MainNav"
        component={MainNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
