import {
  ActionReducerMapBuilder,
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { UserType } from '../../@types';
import { RootState, AppThunk } from '../../app/store';
import { createUser, loginUser } from '../../services/userService';

export interface UserState {
  value: UserType;
  isLogged: boolean;
}

const initialState: UserState = {
  value: { username: '', password: '', chats: [] },
  isLogged: false,
};

export const signup = createAsyncThunk(
  'user/signup',
  async (user: UserType) => {
    try {
      const response = await createUser(user);
      // The value we return becomes the `fulfilled` action payload
      return response;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const loginAsync =
  (credentials: { username: string; password: string }): AppThunk =>
  async (dispatch) => {
    const { username, password } = credentials;
    const response = await loginUser(username, password);
    dispatch(login(response));
  };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    logout: (state) => {
      console.log('logout');
      state = initialState;
    },

    login: (state, action) => {
      state.isLogged = true;
      state.value = action.payload;
    },

    addChat: (state, action) => {
      state.value.chats?.push(action.payload);
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      state.value.chats = state.value.chats?.filter(
        (c) => c.id !== action.payload
      );
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLogged = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLogged = true;
        state.value = action.payload;
      })
      .addCase(signup.rejected, (state) => {
        state.isLogged = false;
      });
  },
});

export const { logout, addChat, deleteChat, login } = userSlice.actions;
export const isLogged = (state: RootState) => state.user.isLogged;
export const currentUser = (state: RootState) => state.user.value;
export const userReducer = userSlice.reducer;
