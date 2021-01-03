/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const PageContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--gray);
  margin: 0 auto;
  min-height: 100%;
  max-width: 1000px;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 1px 1px var(--darkPurple);
`;

const PageContainer = ({ children }) => (
  <PageContainerStyles>{children}</PageContainerStyles>
);

export default PageContainer;
