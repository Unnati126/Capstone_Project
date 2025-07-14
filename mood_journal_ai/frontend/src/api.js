import axios from 'axios';

// This file sets up the API client for the frontend application.
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Interceptor to add the Authorization header with the token from localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // prefix with Bearer
  }
  return config;
});

// Interceptor to handle errors globally
export default API;