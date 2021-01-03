/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SectionHeader from '../components/SectionHeader';
import { CardListStyles, CardStyles } from '../styles/CardStyles';

const FoodSourcesPage = ({ data }) => {
  const foodSources = data.foodSources.nodes;
  return (
    <>
      <SectionHeader title="Food Sources We've Found" />
      <CardListStyles>
        {foodSources.map((foodSource) => (
          <CardStyles key={foodSource.id}>
            <Link to={`/food/${foodSource.slug.current}`}>
              <h2 className="food-title">{foodSource.name}</h2>
              <Img fluid={foodSource.photo.asset.fluid} />
              <h3 className="food-desc">{foodSource.description}</h3>
            </Link>
          </CardStyles>
        ))}
      </CardListStyles>
    </>
  );
};

export const query = graphql`
  query {
    foodSources: allSanityFood {
      nodes {
        name
        id
        description
        slug {
          current
        }
        photo {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default FoodSourcesPage;
