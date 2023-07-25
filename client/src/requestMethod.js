import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmE3NWVkOWZiMmY5MThkZGQ4ODMyOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODk5NjYwMTksImV4cCI6MTY5MDIyNTIxOX0.zmKyBcJ40gAeONu75qUh_DVbPQI1kGXQm0J6sny1h7Q";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});