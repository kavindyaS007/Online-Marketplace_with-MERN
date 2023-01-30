import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/products",
  headers: {
    "Content-type": "application/json"
  }
});