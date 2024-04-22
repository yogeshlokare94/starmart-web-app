import axios from "axios";

const BASE_URL = "http://localhost:8090/auth/customers";

export const getAllCustomers = async () => {
    return await axios.get(BASE_URL);
}

export const addCustomer = async (customer: any) => {
    return await axios.post(BASE_URL, customer);
}