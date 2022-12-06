import axios from "axios";
const token = localStorage.getItem("login");
export const Api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: [
    {key:"Access-Control-Allow-Origin", value: "*"},
    {key:"Access-Control-Allow-Headers", value:"Authorization"},
    {key:"Access-Control-Allow-Methods", value:"GET, POST, OPTIONS, PUT, PATCH, DELETE"},
    {key: "Authorization",Value: "Bearer "+token},
  ],
  timeout: 15000,
});
