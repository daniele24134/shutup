import React from 'react';
import styled from 'styled-components';
import { ClassNameType, MessageType } from '../@types';
import { useAppSelector } from '../app/hooks';

interface MessageItemProps extends ClassNameType {
  message: MessageType;
}

const MessageItem: React.FC<MessageItemProps> = ({ className, message }) => {
  const currentUser = useAppSelector((state) => state.user.value);
  const messageClass =
    currentUser.id === message.authorId ? 'current' : 'other';
  return <li className={`${className} ${messageClass}`}>{message.content}</li>;
};

export default styled(MessageItem)`
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  font-size: 15px;
  width: fit-content;

  &.current {
    background: coral;
    background: linear-gradient(0deg, coral 0%, rgba(241, 158, 143, 1) 78%);
    margin-right: 0;
    margin-left: auto;
  }
  &.other {
    background-color: darkgray;
  }
`;
