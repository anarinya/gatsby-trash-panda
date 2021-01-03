/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from '../components/SectionHeader';
import {
  GridContainer,
  GourmandGridStyles,
  GourmandGridItemStyles,
} from '../styles/GridStyles';

const GourmandPage = ({ data }) => {
  const gourmands = data.gourmands.nodes;
  return (
    <>
      <SectionHeader title="Gourmands" />
      <GridContainer>
        <GourmandGridStyles>
          {gourmands.map((gourmand) => (
            <GourmandGridItemStyles key={gourmand.id}>
              <Link to={`/gourmand/${gourmand.slug.current}`}>
                <Img fluid={gourmand.photo.asset.fluid} />
                <h2>
                  <span className="gourmand-name">{gourmand.name}</span>
                </h2>
              </Link>
              <div className="gourmand-occupation">{gourmand.occupation}</div>
            </GourmandGridItemStyles>
          ))}
        </GourmandGridStyles>
      </GridContainer>
    </>
  );
};

export const query = graphql`
  query($skip: Int = 0) {
    gourmands: allSanityGourmand(skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        occupation
        photo {
          asset {
            fluid(maxHeight: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default GourmandPage;
