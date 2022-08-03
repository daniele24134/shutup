import React from 'react';
import styled from 'styled-components';
import { ClassNameType } from '../@types';

const NoChat: React.FC<ClassNameType> = ({ className }) => {
  return <div className={className}>No chat open</div>;
};

export default styled(NoChat)``;
