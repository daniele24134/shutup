import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChatType, ClassNameType, MessageType } from '../@types';
import { useAppDispatch } from '../app/hooks';
import { getChatAsync, init } from '../features/chat/chatSlice';
import { unshiftChat } from '../features/user/userSlice';
import { receiveMessage, sendMessage, socket } from '../services/socketService';

interface ChatItemProps extends ClassNameType {
  chat: ChatType;
  userId: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ className, chat, userId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getChatAsync(chat.id!));
    navigate(chat.id!);
  };

  return (
    <li className={className} onClick={handleClick}>
      {chat.users?.filter((u) => u.id !== userId)[0]?.username}
    </li>
  );
};

export default styled(ChatItem)`
  height: 70px;
  border-top: 0.8px solid gray;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: inherit;
  padding: 20px;
  font-size: 20px;
  transition: all ease 300ms;

  &:hover {
    background-color: #facbba;
  }
`;
