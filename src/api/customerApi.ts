import { axiosClient } from "./axiosClient";
import type { Customer } from "../models/Customer";

export async function getCustomers(): Promise<Customer[]> {

    const response =
        await axiosClient.get<Customer[]>("/customers");

    return response.data;
}