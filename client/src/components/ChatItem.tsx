import React from 'react';
import styled from 'styled-components';
import { ChatType, ClassNameType } from '../@types';

interface ChatItemProps extends ClassNameType {
  chat: ChatType;
  userId: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ className, chat, userId }) => {
  return (
    <li className={className}>
      {chat.users.filter((u) => u.id !== userId)[0]?.username}
    </li>
  );
};

export default styled(ChatItem)`
  height: 70px;
  border-bottom: 0.8px solid gray;
  border-top: 0.8px solid gray;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: inherit;
  padding: 20px;
  font-size: 20px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
