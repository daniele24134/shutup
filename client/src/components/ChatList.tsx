import React from 'react';
import { useAppSelector } from '../app/hooks';
import styled from 'styled-components';

type ChatLisType = {
  className?: string;
  userId: string;
};

const ChatList: React.FC<ChatLisType> = ({ className, userId }) => {
  const user = useAppSelector((state) => state.user.value);

  const chatlist = user.chats?.map((chat) => {
    return (
      <li key={chat.id}>
        {chat.users.filter((u) => u.id !== userId)[0]?.username}
      </li>
    );
  });
  const nochat = <div>You have no chat yet</div>;

  return (
    <ul className={className}>{user.chats?.length ? chatlist : nochat}</ul>
  );
};

export default styled(ChatList)`
  margin-top: 30px;
  overflow-y: auto;
  width: 100%;

  & li {
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
  }
`;
