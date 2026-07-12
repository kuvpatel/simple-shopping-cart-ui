import { axiosClient } from "./axiosClient";
import type { Product } from "../models/Product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosClient.get<Product[]>("/Products");
  return response.data;
};