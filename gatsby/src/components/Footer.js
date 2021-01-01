import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const FooterStyles = styled.div`
  font-size: 0.9rem;
  text-align: center;
  color: var(--white);
  margin: 2rem 0;
`;

const Footer = () => {
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
    <FooterStyles>
      <span>&copy; {new Date().getFullYear()} | </span>
      <span>Made with ♥ and GatsbyJS</span>
    </FooterStyles>
  );
};

export default Footer;
