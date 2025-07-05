import axios from "axios";

// This file sets up the API client for the frontend application.
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor to add the Authorization header with the token from localStorage
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) req.headers.Authorization = token;
    return req;
});

// Interceptor to handle errors globally
export default API;