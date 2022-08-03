import React from 'react';
import styled from 'styled-components';
import { ClassNameType } from '../@types';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const Chat: React.FC<ClassNameType> = ({ className }) => {
  const chat = useAppSelector((state) => state.chat.value);
  const currentUser = useAppSelector((state) => state.user.value);

  const userHeaderName =
    chat.users.find((u) => u.username !== currentUser.username)?.username || '';

  return (
    <section className={className}>
      <ChatHeader userName={userHeaderName} />
      <ChatMessages messages={chat.messages} />
      <ChatInput authorId={currentUser.id!} chatId={chat.id!} />
    </section>
  );
};

export default styled(Chat)`
  width: 100px;
  height: 100px;
`;
