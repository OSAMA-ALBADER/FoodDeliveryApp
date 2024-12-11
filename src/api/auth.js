import instance from ".";

const register = async (userInfo) => {
  const formData = new FormData();

  formData.append("username", userInfo.username);
  formData.append("password", userInfo.password);
  formData.append("email", userInfo.email);

  if (userInfo.image) {
    formData.append("image", {
      uri: userInfo.image,
      name: "profile.jpg",
      type: "image/jpeg",
    });
  }

  const { data } = await instance.post("/auth/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

const login = async (credentials) => {
  const { data } = await instance.post("/auth/login", credentials);
  return data;
};

const getProfile = async () => {
  const { data } = await instance.get("/auth/profile");
  return data;
};

export { register, login, getProfile };
