import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Logo from './Logo';
import Nav from './Nav';
import HeaderStyles from './Header.style';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <HeaderStyles>
      <Logo title={data.site?.siteMetadata?.title} />
      <Nav />
    </HeaderStyles>
  );
};

export default Header;
