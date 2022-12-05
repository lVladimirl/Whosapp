import axios from "axios";
const token = localStorage.getItem("login");
export const Api = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNiMGZiNDQ2LTdmZTAtNDc1MS1hNGJmLWM1MTdkNDc4NDY2MyIsImlhdCI6MTY3MDI2NTI3OSwiZXhwIjoxNjcwMzUxNjc5LCJzdWIiOiJjYjBmYjQ0Ni03ZmUwLTQ3NTEtYTRiZi1jNTE3ZDQ3ODQ2NjMifQ.90B_udIuljsyXedKjWkjKddvDZoyhtyTuDiu-leoq8g",
  },
  timeout: 15000,
});
