import axios from "axios";

const BASE_URL = "http://localhost:8090/auth/customers";

export const getAllCustomers = async () => {
    return await axios.get(BASE_URL);
}

export const getCustomerById = async (id: any) =>{
    return await axios.get(`${BASE_URL}/${id}`);
}

export const addCustomer = async (customer: any) => {
    return await axios.post(BASE_URL, customer);
}

export const updateCustomerById = async (id: any, customer: any) => {
    return await axios.put(`${BASE_URL}/${id}`, customer);
}

export const deleteCustomer = async (id: any) => {
    return await axios.delete(`${BASE_URL}/${id}`);
}