import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL} from "../../constants";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsersAsync = createAsyncThunk<User[], void, {
  rejectValue: string;
}>('users/fetchUsers', async () => {
  try {
    const response = await axios.get<User[]>(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw error.message;
  }
});


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.error = action.error?.message || null;
        state.loading = false;
      });
  },
});

export default usersSlice.reducer;
