import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async ({email, password, cb}, {rejectWithValue}) => {
    try {
      const {data} = await http().post('/auth/login', {email, password});
      cb()
      return data.result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const registerAction = createAsyncThunk(
  'auth/registerAction',
  async (
    {firstName, lastName, email, password, phoneNumber,cb},
    {rejectWithValue},
  ) => {
    try {
      const {data} = await http().post('/auth/register', {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });
      cb()
      return data.results;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const forgotPasswordAction = createAsyncThunk(
  'auth/forgotPassword',
  async ({email, cb}, {rejectWithValue}) => {
    try {
      const data = await http().post('/auth/forgotPassword', {email});
      cb()
      return data.result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const ResetPasswordAction = createAsyncThunk(
  'auth/resetPassword',
  async ({code, password, email, confirmPassword, cb}, {rejectWithValue}) => {
    try {
      const data = await http().post('/auth/resetPassword', {
        email,
        confirmPassword,
        code,
        password,
      });
      cb()
      return data.result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
