import React from 'react';
import { useAppSelector } from '../app/hooks';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import AddChat from '../components/AddChat';
import styled from 'styled-components';
import { ClassNameType } from '../@types';

const Dashboard: React.FC<ClassNameType> = ({ className }) => {
  const user = useAppSelector((state) => state.user.value);
  return (
    <div className={className}>
      <Header username={user.username} />
      <main>
        <aside>
          <AddChat userId={user.id!} />
          <ChatList userId={user.id!} />
        </aside>
      </main>
    </div>
  );
};

export default styled(Dashboard)`
  & main {
    display: flex;
    & aside {
      width: 300px;
      background-color: pink;
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
