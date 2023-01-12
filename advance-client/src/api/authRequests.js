import axios from "axios"

const apiUrl = process.env.REACT_APP_PRODUCTION_API_URL || process.env.REACT_APP_LOCAL_API_URL

// const API = axios.create({ baseURL: "http://localhost:8080"});
const API = axios.create({ baseURL: apiUrl});

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
