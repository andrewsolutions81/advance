import axios from "axios";

const apiUrl = process.env.REACT_APP_PRODUCTION_API_URL || process.env.REACT_APP_LOCAL_API_URL

const API = axios.create({ baseURL: apiUrl});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const uploadImage = (data) => API.post("/upload/", data);
export const uploadPost = (data) => API.post("/post", data);
