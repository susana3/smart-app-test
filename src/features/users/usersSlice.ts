import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL} from "../../constants";
import {FiltersState, User} from "../../types/types";


interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  filters: FiltersState
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  filters: {
    name: '',
    username: '',
    email: '',
    phone: ''
  }
};

export const fetchUsersAsync = createAsyncThunk<User[], UsersState['filters'], { rejectValue: string; }>(
  'users/fetchUsers',
  async (filters, { rejectWithValue }) => {
    try {
      const params: { [key: string]: string } = Object.keys(filters).reduce((acc, key) => {
        acc[`${key}_like`] = filters[key as keyof typeof filters];
        return acc;
      }, {} as { [key: string]: string });

      const response = await axios.get<User[]>(API_URL, { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

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
