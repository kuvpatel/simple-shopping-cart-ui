import { axiosClient } from "./axiosClient";
import type {
  CreateOrderRequest,
  OrderResponse
} from "../models/Order";


export const createOrder = async (
  request: CreateOrderRequest
): Promise<OrderResponse> => {

  const response =
    await axiosClient.post<OrderResponse>(
      "/orders",
      request
    );

  return response.data;
};