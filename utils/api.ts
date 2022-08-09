import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
  },
});


export const getallProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data.products;
  } catch (err: any) {
    return err;
  }
}

export const getProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data.product;
  } catch (err: any) {
    return err;
  }
}

export const getallCategories = async () => {
  try {
    const response = await axiosInstance.get('/categories');
    return response.data.categories;
  } catch (err: any) {
    return err;
  }
}

export const AddProduct = async (reqBody) => {
  try {
    const response = await axiosInstance.post('/products', reqBody);
    return response.data;
  } catch (err: any) {
    return err;
  }
}