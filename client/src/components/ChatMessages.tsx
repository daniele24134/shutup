import React from 'react';
import styled from 'styled-components';
import { ClassNameType, MessageType } from '../@types';

interface ChatMessagesProps extends ClassNameType {
  messages: MessageType[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ className, messages }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li>{message.content}</li>
      ))}
    </ul>
  );
};

export default styled(ChatMessages)``;
