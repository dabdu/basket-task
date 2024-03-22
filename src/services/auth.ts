import axios from "axios";
import { baseURL } from "../constants/URLs";
import { LoginDTO } from "../constants/typings/auth";

const onLogin = async (postData: LoginDTO) => {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, postData);
        return response.data;
    } catch (error: any) {
        if (error?.response?.data?.message === undefined) {
            throw error.message
        } else {
            throw error?.response?.data?.message;
        }
    }
};

export { onLogin }