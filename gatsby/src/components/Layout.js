import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PageContainer from './PageContainer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .main {
    min-height: 500px;
  }
`;

const Layout = ({ children }) => (
  <LayoutStyles>
    <GlobalStyles />
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </LayoutStyles>
);

Layout.propTypes = {};

export default Layout;
