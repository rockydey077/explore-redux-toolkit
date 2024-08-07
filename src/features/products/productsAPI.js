import baseAxois from "../../utils/axois.config";

export const fetchProducts = async () => {
  const data = await baseAxois.get("/products");
  return data.data;
};

export const postProduct = async (productData) => {
  await baseAxois.post("/product", productData);
};

export const deleteProduct = async (id) => {
  await baseAxois.delete(`/product/${id}`);
};
