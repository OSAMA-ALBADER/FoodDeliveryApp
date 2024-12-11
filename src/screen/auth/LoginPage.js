import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth"; // Assume you have a login function
import UserContext from "../../context/UserContext";
import { setToken } from "../../api/storage";

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated } = useContext(UserContext);

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      await setToken(data.token);
      setAuthenticated(true);
      navigation.navigate("MainNav");
    },
    onError: (err) => {
      console.log(err);
      alert("Login failed! Please try again.");
    },
  });

  const handleSubmit = () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    loginUser({
      username,
      password,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> EnyRestaurants </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Logging in..." : "Log In"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => navigation.replace("Register")}>
        <Text style={styles.registerLink}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6f00",
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 20,
    color: "#666",
  },
  registerLink: {
    color: "#ff6f00",
    fontWeight: "bold",
    marginTop: 5,
  },
});
