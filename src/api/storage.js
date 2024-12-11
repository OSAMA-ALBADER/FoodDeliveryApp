import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

const setToken = async (token) => {
  await setItemAsync("token", token);
};

const getToken = async () => {
  const token = await getItemAsync("token");
  return token;
};

const deleteToken = async () => {
  await deleteItemAsync("token");
};

const setUserData = async (userData) => {
  await setItemAsync("userData", JSON.stringify(userData));
};

const getUserData = async () => {
  const userData = await getItemAsync("userData");
  return userData ? JSON.parse(userData) : null;
};

const deleteUserData = async () => {
  await deleteItemAsync("userData");
};

export {
  setToken,
  getToken,
  deleteToken,
  setUserData,
  getUserData,
  deleteUserData,
};
