import axios from "axios"

const apiUrl = process.env.REACT_APP_PRODUCTION_API_URL || process.env.REACT_APP_LOCAL_API_URL

const API = axios.create({ baseURL: apiUrl});

export const getTimelinePosts= (id)=> API.get(`/post/${id}/timeline`);
export const likePost=(id, userId)=>API.put(`post/${id}/like`, {userId: userId})
