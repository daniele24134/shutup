import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatType, UserType } from '../../@types';
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

// thunks
export const loginAsync =
  (credentials: { username: string; password: string }): AppThunk =>
  async (dispatch) => {
    const { username, password } = credentials;
    const response = await loginUser(username, password);
    if (response) {
      dispatch(login(response));
    } else {
      console.log('not logged');
    }
  };

export const signupAsync =
  (credentials: { username: string; password: string }): AppThunk =>
  async (dispatch) => {
    const response = await createUser(credentials);
    if (response) {
      dispatch(login(response));
    } else {
      console.log('user not created');
    }
  };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      console.log('logout');
      state.isLogged = false;
      state.value = { username: '', password: '', chats: [] };
    },
    login: (state, action: PayloadAction<UserType>) => {
      state.isLogged = true;
      state.value = action.payload;
      console.log(state.isLogged);
    },
    addChat: (state, action: PayloadAction<ChatType>) => {
      state.value.chats?.push(action.payload);
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      state.value.chats = state.value.chats?.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const { logout, addChat, deleteChat, login } = userSlice.actions;
export const isLogged = (state: RootState) => state.user.isLogged;
export const currentUser = (state: RootState) => state.user.value;
export const userReducer = userSlice.reducer;
