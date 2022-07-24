import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatType, MessageType, UserType } from '../../@types';
import { RootState, AppThunk } from '../../app/store';
import { UserState } from '../user/userSlice';

export interface ChatState {
  value: ChatType;
}

const initialState: ChatState = {
  value: {
    messages: [],
    users: [],
  },
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.value.messages.push(action.payload);
    },
    init: (state, action: PayloadAction<ChatType>) => {
      state.value = action.payload;
    },
  },
});

export const chatReducer = chatSlice.reducer;
