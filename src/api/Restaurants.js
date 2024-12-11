import instance from ".";

const GetAllCategories = async () => {
  const { data } = await instance.get("/category");
  return data;
};

const GetAllResturants = async () => {
  const { data } = await instance.get("/resturant");
  return data;
};
const GetResturantByID = async (id) => {
  const { data } = await instance.get(`/resturant/${id}`);
  return data;
};
const GetResturantItems = async (id) => {
  const { data } = await instance.get(`/resturant/${id}/items`);
  return data;
};

const GetItemDetails = async (id) => {
  const { data } = await instance.get(`/item/${id}`);
  return data;
};

export {
  GetAllResturants,
  GetAllCategories,
  GetResturantByID,
  GetItemDetails,
  GetResturantItems,
};
