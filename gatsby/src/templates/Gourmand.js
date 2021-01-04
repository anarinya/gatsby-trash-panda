/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import PageContainer from '../components/PageContainer';

const GourmandPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    width: 100%;
    max-height: 500px;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0.5px 0.5px 1px var(--black);
  }

  .bio {
    line-height: 1.8rem;
  }

  .content {
    align-self: flex-start;
    margin-top: 2rem;
  }
`;

const GourmandPage = ({ data: { gourmand } }) => (
  <div>
    <SEO title={gourmand.name} />
    <SectionHeader title={gourmand.name} subtitle={gourmand.occupation} />
    <PageContainer>
      <GourmandPageStyles>
        <Img fluid={gourmand.photo.asset.fluid} />
        <div className="content">
          <h1>Biography</h1>
          <span className="bio">{gourmand.bio}</span>
        </div>
      </GourmandPageStyles>
    </PageContainer>
  </div>
);

export const query = graphql`
  query GourmandQuery($slug: String!) {
    gourmand: sanityGourmand(slug: { current: { eq: $slug } }) {
      name
      id
      occupation
      bio
      photo {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default GourmandPage;
