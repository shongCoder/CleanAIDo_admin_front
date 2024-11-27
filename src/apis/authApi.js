import axios from "axios";
import useAuthStore from "../stores/useAuthStore.js";
const authStore = useAuthStore();


const apiClient = axios.create({
    baseURL: "http://localhost:8080/api/auth",
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (credentials) => {
    const response = await apiClient.post("/login", credentials);

    console.log(response.data)

    const role = response.data.adminRole ? 'ADMIN' : 'SELLER';

    authStore.login(response.data.accessToken, response.data.refreshToken,
        role, response.data.id)

    return response.data;
};

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};