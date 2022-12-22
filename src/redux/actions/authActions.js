import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password, cb }, { rejectWithValue }) => {
    try {
      console.log(email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:8888/auth/login",
        { email, password },
        config
      );
      cb();
      return res.data.result.token;
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, phoneNumber, email, password, cb },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const res = await axios.post("http://localhost:8888/auth/register", {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      }, config);
      cb()
      return res.data.results.token
    } catch (error) {
      if(error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
);
