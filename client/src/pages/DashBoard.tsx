import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import AddChat from '../components/AddChat';
import styled from 'styled-components';
import { ClassNameType } from '../@types';
import { socketInit, socket } from '../services/socketService';

const Dashboard: React.FC<ClassNameType> = ({ className }) => {
  const user = useAppSelector((state) => state.user.value);

  useEffect((): any => {
    return socketInit(user);
  }, []);

  return (
    <div className={className}>
      <Header username={user.username} />
      <main>
        <aside>
          <AddChat userId={user.id!} />
          <ChatList userId={user.id!} />
        </aside>
        <section></section>
      </main>
    </div>
  );
};

export default styled(Dashboard)`
  & main {
    display: flex;
    & aside {
      width: 350px;
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & section {
      height: calc(100vh - 60px);
      background-color: coral;
      width: 100%;
    }
  }
`;
