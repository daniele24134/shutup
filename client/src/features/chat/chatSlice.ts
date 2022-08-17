import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatType, MessageType } from '../../@types';
import { AppThunk } from '../../app/store';
import { getChat } from '../../services/chatService';
import { createMessage } from '../../services/messageService';
import { createUser } from '../../services/userService';
import { login } from '../user/userSlice';

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

export const getChatAsync =
  (id: string): AppThunk =>
  async (dispatch) => {
    const response = await getChat(id);
    if (response) {
      dispatch(init(response));
    } else {
      console.log('chat not fetched');
    }
  };

export const createMessageAsync = (message: MessageType): AppThunk => {
  return async (dispatch) => {
    const response = await createMessage(message);
    if (response) {
      dispatch(addMessage(response));
    } else {
      console.log('message not created');
    }
  };
};

export const { addMessage, init } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
