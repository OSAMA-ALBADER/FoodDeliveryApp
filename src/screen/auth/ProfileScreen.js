import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import UserContext from "../../context/UserContext";
import { deleteToken, deleteUserData } from "../../api/storage";
import { getProfile } from "../../api/auth";
import { useQuery } from "@tanstack/react-query";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfileScreen = () => {
  const { setAuthenticated } = useContext(UserContext);

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const handleLogout = async () => {
    await deleteToken();
    await deleteUserData();
    setAuthenticated(false);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <AntDesign name="loading1" size={24} color="black" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error loading profile</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        {profile?.image ? (
          <Image source={{ uri: profile.image }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>
              {profile?.username?.charAt(0)?.toUpperCase() || "?"}
            </Text>
          </View>
        )}
        <Text style={styles.username}>{profile?.username || "User"}</Text>
        <Text style={styles.email}>{profile?.email || ""}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#e1e1e1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  placeholderText: {
    fontSize: 40,
    color: "#666",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#ff6f00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
