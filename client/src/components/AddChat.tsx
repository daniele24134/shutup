import React, { useState } from 'react';
import { createChat } from '../services/chatService';
import { useAppDispatch } from '../app/hooks';
import { addChat } from '../features/user/userSlice';
import styled from 'styled-components';
import { ChatType, ClassNameType, UserType } from '../@types';
import { sendChat } from '../services/socketService';

interface AddChatProps extends ClassNameType {
  userId: string;
}

const AddChat: React.FC<AddChatProps> = ({ className, userId }) => {
  const [username, setUsername] = useState('');
  const dispatch = useAppDispatch();

  const handleAdd = async () => {
    if (username) {
      const chat: ChatType = await createChat(userId, username);
      if (chat.id) {
        dispatch(addChat(chat));
        const otherId = chat.users.find((u: UserType) => u.id !== userId);
        if (otherId?.id) sendChat(chat, otherId.id);
      }
    }
    setUsername('');
  };

  return (
    <div className={className}>
      <input
        type='text'
        placeholder='Add by username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default styled(AddChat)`
  margin-top: 20px;
  & input {
    padding: 5px;
    border-radius: 15px;
    margin-right: 5px;
    padding-left: 10px;
    &:active &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }

  & button {
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1.5px solid white;
    background-color: transparent;
    transition: all 300ms ease;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
