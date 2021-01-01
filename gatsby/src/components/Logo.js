import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
    display: inline;
    margin-right: 0.5rem;
    font-size: 3rem;
    color: var(--white);
    text-shadow: 1px 1px var(--darkPurple);
  }
  .title {
    font-size: 1.3rem;
    margin: 0;
    max-width: 300px;
    text-shadow: 1px 1px var(--darkPurple);
  }
`;

const Logo = ({ title = '' }) => (
  <LogoStyles>
    <h1>ʕ·͡ᴥ·ʔ﻿</h1>
    <h4 className="title">{title}</h4>
  </LogoStyles>
);

export default Logo;
