import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 4rem;
    color: var(--white);
    text-shadow: 1px 1px var(--darkPurple);
  }
  .title {
    font-size: 1.3rem;
    margin: 0;
    max-width: 300px;
    text-shadow: 1px 1px var(--darkPurple);
    border-bottom: 1px solid var(--white);
    padding-bottom: 1rem;
  }
`;

const Logo = ({ title = '' }) => (
  <LogoStyles>
    <h1>ʕ·͡ᴥ·ʔ﻿</h1>
    <h2 className="title">{title}</h2>
  </LogoStyles>
);

export default Logo;
