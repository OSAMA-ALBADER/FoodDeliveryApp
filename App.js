import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect, useContext } from "react";
import UserContext from "./src/context/UserContext";
import AuthNavigation from "./src/navigation/AuthNav/AuthNavigation";
import MainNav from "./src/MainNavigation/MainNav";
import { getToken } from "./src/api/storage";

export default function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) setAuthenticated(true);
    };
    checkToken();
  }, []);

  return (
    <UserContext.Provider value={{ authenticated, setAuthenticated }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            {authenticated ? <MainNav /> : <AuthNavigation />}
            <StatusBar style="auto" />
          </SafeAreaView>
        </NavigationContainer>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
