/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const IntroStyles = styled.div`
  margin-top: 2rem;
  color: var(--white);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: 6px 6px 6px var(--darkPurple);

  .burger-img {
    display: block;
    width: 250px;
    height: 250px;
  }

  .gatsby-image-wrapper {
    width: 250px;
    height: 250px;
  }

  .text {
    max-width: 500px;
  }
`;

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "trash.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <IntroStyles>
      <div className="burger-img">
        <img src={data.fileName?.publicURL} alt="food" />
      </div>
      <div className="text">
        <h1>A curated list of the finest in second-hand outdoor dining</h1>
        <h2>...from the world's most passionate gourmands.</h2>
      </div>
    </IntroStyles>
  );
};

export default Intro;
