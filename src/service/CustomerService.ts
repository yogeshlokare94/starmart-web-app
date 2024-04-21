import axios from "axios";

const BASE_URL = "http://localhost:8090/auth/customers";

export const getAllCustomers = async () => {
    return await axios.get(BASE_URL);
}