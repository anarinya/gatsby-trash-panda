import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 1rem;
  padding: 1rem;
  text-align: center;
  text-shadow: 6px 6px 6px var(--darkPurple);
`;

const SectionHeader = ({ title = '', subtitle = '' }) => (
  <SectionHeaderStyles>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </SectionHeaderStyles>
);

export default SectionHeader;
