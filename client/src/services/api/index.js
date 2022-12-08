import axios from "axios";
const token = localStorage.getItem("@WHO-TOKEN");
export const Api = axios.create({
    baseURL:"http://localhost:3001/",
    headers: {'Authorization': 'Bearer '+token},
    timeout:15000,
});
