/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const IntroStyles = styled.div`
  max-width: 1200px;
  color: var(--white);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 2rem;
  text-align: center;
  text-shadow: 6px 6px 6px var(--darkPurple);

  .gatsby-image-wrapper {
    width: 90%;
  }

  .burger-img {
    width: 500px;
    min-width: 300px;
    margin: 0 auto;
  }

  .text {
    max-width: 500px;
  }
`;

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "burger.png" }) {
        childImageSharp {
          fluid(maxWidth: 830) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <IntroStyles>
      <div className="burger-img">
        <Img fluid={data.fileName?.childImageSharp?.fluid} alt="burger" />
      </div>
      <div className="text">
        <h1>A curated list of the finest in second-hand outdoor dining</h1>
        <h2>...from the world's most passionate gourmands.</h2>
      </div>
    </IntroStyles>
  );
};

export default Intro;
