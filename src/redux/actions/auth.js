import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password }) => {
    const { data } = await axios.post("http://localhost:8888/auth/login", { email, password });
    console.log(data)
    return data.result.token;
  }
);
