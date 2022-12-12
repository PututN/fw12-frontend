import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, cb }) => {
    try {
      const { data } = await axios.post("http://localhost:8888/auth/login", { email, password });
      cb()
      return data.result.token;
    } catch (err) {
      console.log(err)
      throw err
    }

  }
);
