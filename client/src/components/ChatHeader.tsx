import React from 'react';
import styled from 'styled-components';
import { ClassNameType } from '../@types';

interface ChatHeaderProps extends ClassNameType {
  userName: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ className, userName }) => {
  return (
    <header className={className}>
      <h2>{userName}</h2>
    </header>
  );
};

export default styled(ChatHeader)`
  font-size: 30px;
  background-color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
