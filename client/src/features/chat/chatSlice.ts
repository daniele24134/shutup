import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatType, MessageType } from '../../@types';

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
  reducers: {
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.value.messages.push(action.payload);
    },
    init: (state, action: PayloadAction<ChatType>) => {
      state.value = action.payload;
    },
  },
});

export const chatReducer = chatSlice.reducer;
