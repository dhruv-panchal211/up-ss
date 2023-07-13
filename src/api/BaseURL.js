import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${access_token()}`,
  },
  responseType: "json",
  withCredentials: true,
});

export default axiosPrivate;
